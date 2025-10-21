"use client";

import {
  Bell,
  FileCheck,
  AlertTriangle,
  Zap,
  Shield,
  FileText,
  Clock,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Proactive Monitoring",
    description: "Never miss a compliance deadline. ComplianceIQ actively monitors documents, identifies expiring certifications, and alerts you before issues arise.",
    highlight: "Real-time alerts",
  },
  {
    icon: FileCheck,
    title: "Auto-Generated Documents",
    description: "Instantly create W-9 forms, Accredited Investor certifications, and compliance packages—pre-filled and ready for signature.",
    highlight: "Signature-ready",
  },
  {
    icon: AlertTriangle,
    title: "Gap Detection & Remediation",
    description: "Automatically identifies missing compliance requirements and provides step-by-step remediation guidance with all necessary forms.",
    highlight: "Zero gaps",
  },
  {
    icon: Zap,
    title: "Instant Regulatory Research",
    description: "Access up-to-date regulatory information, penalties, and jurisdictional requirements in seconds—not hours of manual research.",
    highlight: "Lightning fast",
  },
  {
    icon: Shield,
    title: "AML/KYC Automation",
    description: "Streamline Anti-Money Laundering and Know Your Customer procedures with intelligent automation and regulatory compliance checks.",
    highlight: "Built-in compliance",
  },
  {
    icon: FileText,
    title: "Audit-Ready Reports",
    description: "Generate comprehensive compliance reports with regulatory citations, status updates, and complete documentation trails.",
    highlight: "Examiner approved",
  },
  {
    icon: Clock,
    title: "90% Time Savings",
    description: "Reduce manual compliance tasks from hours to minutes. Free your team to focus on high-value client relationships.",
    highlight: "Proven ROI",
  },
  {
    icon: Target,
    title: "Risk Assessment",
    description: "Intelligent risk profiling and suitability analysis that ensures clients are matched with appropriate investment products.",
    highlight: "Risk-aware",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need for
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Effortless Compliance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features that transform compliance from a burden into a competitive advantage
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-3">
                  {feature.highlight}
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Join hundreds of firms saving time and reducing compliance risk
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-muted-foreground">SEC Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-muted-foreground">FINRA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-muted-foreground">SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
