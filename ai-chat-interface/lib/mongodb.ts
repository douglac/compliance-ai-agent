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
}

// Extend global to cache MongoDB connection across hot reloads in development
declare global {
  var mongoConnection: CachedConnection | undefined;
}

let cached: CachedConnection = global.mongoConnection || {
  client: null,
  db: null,
};

if (!global.mongoConnection) {
  global.mongoConnection = cached;
}

/**
 * Get MongoDB database instance
 * Reuses connection across serverless function invocations
 */
export async function getDatabase(): Promise<Db> {
  if (cached.db) {
    return cached.db;
  }

  if (!cached.client) {
    cached.client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      minPoolSize: 5,
    });

    await cached.client.connect();
    console.log("[MongoDB] Connected to database");
  }

  cached.db = cached.client.db(MONGODB_DATABASE);
  return cached.db;
}

/**
 * Get MongoDB client instance
 */
export async function getClient(): Promise<MongoClient> {
  if (cached.client) {
    return cached.client;
  }

  cached.client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 5,
  });

  await cached.client.connect();
  console.log("[MongoDB] Connected to MongoDB");

  return cached.client;
}

// Export types
export { Db, MongoClient };

