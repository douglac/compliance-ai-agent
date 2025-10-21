import { MongoClient, Db } from "mongodb";

/**
 * MongoDB connection utility for Next.js
 * Uses connection pooling and caching for serverless functions
 */

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || "compliance_db";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!MONGODB_DATABASE) {
  throw new Error("Please define the MONGODB_DATABASE environment variable");
}

interface CachedConnection {
  client: MongoClient | null;
  db: Db | null;
  promise: Promise<MongoClient> | null;
}

// Extend global to cache MongoDB connection across hot reloads in development
declare global {
  var mongoConnection: CachedConnection | undefined;
}

let cached: CachedConnection = global.mongoConnection || {
  client: null,
  db: null,
  promise: null,
};

if (!global.mongoConnection) {
  global.mongoConnection = cached;
}

/**
 * Get MongoDB database instance
 * Reuses connection across serverless function invocations
 */
export async function getDatabase(): Promise<Db> {
  // If we have a cached db and client is still connected, return it
  if (cached.db && cached.client) {
    try {
      // Test if connection is still alive
      await cached.client.db("admin").command({ ping: 1 });
      return cached.db;
    } catch (error) {
      // Connection is dead, reset cache
      console.log("[MongoDB] Connection lost, reconnecting...");
      cached.client = null;
      cached.db = null;
      cached.promise = null;
    }
  }

  // If we have a connection promise in progress, wait for it
  if (cached.promise) {
    cached.client = await cached.promise;
    cached.db = cached.client.db(MONGODB_DATABASE);
    return cached.db;
  }

  // Create new connection
  cached.promise = MongoClient.connect(MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 5,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  try {
    cached.client = await cached.promise;
    cached.db = cached.client.db(MONGODB_DATABASE);
    console.log("[MongoDB] Connected to database:", MONGODB_DATABASE);
    return cached.db;
  } catch (error) {
    cached.promise = null;
    console.error("[MongoDB] Connection failed:", error);
    throw error;
  }
}

/**
 * Get MongoDB client instance
 */
export async function getClient(): Promise<MongoClient> {
  if (cached.client) {
    try {
      // Test if connection is still alive
      await cached.client.db("admin").command({ ping: 1 });
      return cached.client;
    } catch (error) {
      // Connection is dead, reset cache
      console.log("[MongoDB] Connection lost, reconnecting...");
      cached.client = null;
      cached.db = null;
      cached.promise = null;
    }
  }

  if (cached.promise) {
    return await cached.promise;
  }

  cached.promise = MongoClient.connect(MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 5,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  try {
    cached.client = await cached.promise;
    console.log("[MongoDB] Connected to MongoDB");
    return cached.client;
  } catch (error) {
    cached.promise = null;
    console.error("[MongoDB] Connection failed:", error);
    throw error;
  }
}

// Export types
export { Db, MongoClient };

