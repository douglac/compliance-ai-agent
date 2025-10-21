"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Compliance Management
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
          <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Compliance Automation
          </span>
          <br />
          <span className="text-foreground">That Actually Works</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:400ms]">
          ComplianceIQ{" "}
          <span className="text-primary font-semibold">
            {" "}
            multiagent compliance orchestration{" "}
          </span>{" "}
          to transform your compliance workflow from reactive bottleneck to
          proactive powerhouse.
        </p>

        {/* Key value props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in [animation-delay:600ms]">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">Proactive Monitoring</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">Auto-Generated Documents</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">Gap Detection</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:800ms]">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link href="#demo">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-2 hover:bg-muted transition-all duration-300"
            asChild
          >
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>

        {/* Hero visual - Floating cards animation */}
        <div className="mt-20 animate-fade-in [animation-delay:1000ms]">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative aspect-video rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-muted shadow-2xl overflow-hidden">
              {/* Mock chat interface preview */}
              <div className="absolute inset-0 p-8">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        ComplianceIQ Assistant
                      </div>
                      <div className="text-xs text-muted-foreground">
                        6 AI Agents Active
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      <p className="text-foreground">
                        ⚠️ <strong>John Anderson</strong> is out of compliance.
                        I've already prepared the required W-9 and Accredited
                        Investor forms ready for signature.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                        View W-9 Form
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                        View Accredited Investor Form
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating agent badges */}
            <div className="absolute -left-8 top-1/4 animate-float">
              <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                <div className="text-xs font-medium">Client Search</div>
              </div>
            </div>
            <div className="absolute -right-8 top-1/3 animate-float [animation-delay:500ms]">
              <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                <div className="text-xs font-medium">Document Search</div>
              </div>
            </div>
            <div className="absolute left-1/4 -bottom-4 animate-float [animation-delay:1000ms]">
              <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                <div className="text-xs font-medium">Compliance Knowledge</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
