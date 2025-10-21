"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, MessageSquare } from "lucide-react";
import Link from "next/link";

const exampleQueries = [
  {
    query: "Check John Anderson's compliance status",
    preview: "⚠️ John Anderson is out of compliance. I've already prepared the required W-9 and Accredited Investor forms ready for signature.",
  },
  {
    query: "Show me all documents expiring in the next 30 days",
    preview: "I found 12 documents expiring soon. Would you like me to generate renewal packages with all required regulatory information?",
  },
  {
    query: "What are the current AML requirements for high-risk clients?",
    preview: "For high-risk clients, current AML requirements include enhanced due diligence, source of wealth verification, and ongoing monitoring. I can create a complete compliance checklist for you.",
  },
];

export function DemoPreview() {
  const [activeQuery, setActiveQuery] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Play className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">See It In Action</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience the
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              ComplianceIQ Difference
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how natural conversations with AI agents transform complex compliance tasks
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Interactive demo UI */}
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Mock chat header */}
                <div className="bg-muted/50 border-b border-border px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">ComplianceIQ Assistant</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        6 AI Agents Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-6 space-y-4 bg-gradient-to-br from-muted/20 to-background min-h-[400px]">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                      <p className="text-sm">{exampleQueries[activeQuery].query}</p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm mb-3">{exampleQueries[activeQuery].preview}</p>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs border border-primary/20 transition-colors">
                          View Documents
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs border border-primary/20 transition-colors">
                          Generate Package
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock input */}
                <div className="border-t border-border px-6 py-4 bg-muted/30">
                  <div className="flex items-center gap-2 px-4 py-3 bg-background border border-input rounded-xl">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1 text-sm text-muted-foreground">
                      Ask anything about compliance...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Query selector */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Try these examples:</h3>
                <p className="text-muted-foreground">
                  Click to see how ComplianceIQ responds to common compliance questions
                </p>
              </div>

              <div className="space-y-3">
                {exampleQueries.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveQuery(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      activeQuery === index
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          activeQuery === index ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.query}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/dashboard">
                    Try It Yourself
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  No credit card required • Free trial available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
