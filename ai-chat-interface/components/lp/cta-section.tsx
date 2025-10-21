"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Mail, Building2, CheckCircle } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with your email/CRM service
    console.log("Demo request:", { email, company });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border border-primary/20">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-white/5" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Ready to Transform
                  <br />
                  Your Compliance Workflow?
                </h2>
                <p className="text-xl text-muted-foreground">
                  See ComplianceIQ in action with a personalized demo
                </p>
              </div>

              {/* Value props */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">No credit card required</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">30-minute demo</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Custom ROI analysis</p>
                </div>
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl">
                    <div className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Work email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-11 h-12 text-base"
                        />
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="pl-11 h-12 text-base"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 text-base font-semibold group"
                      >
                        Schedule Your Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </form>
              ) : (
                <div className="max-w-xl mx-auto bg-card/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        We'll be in touch within 24 hours to schedule your personalized demo.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Alternative options */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>Prefer to talk now?</span>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:sales@complianceiq.ai"
                    className="text-primary hover:underline font-medium"
                  >
                    sales@complianceiq.ai
                  </a>
                  <span className="text-muted-foreground/50">|</span>
                  <a
                    href="tel:+18005551234"
                    className="text-primary hover:underline font-medium"
                  >
                    (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
