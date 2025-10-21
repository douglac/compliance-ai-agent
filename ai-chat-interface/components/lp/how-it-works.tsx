"use client";

import {
  Users,
  FileText,
  Scale,
  Package,
  BookOpen,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const agents = [
  {
    icon: Users,
    name: "Client Search Agent",
    description:
      "Instantly finds clients, analyzes risk profiles, net worth, and investment preferences",
    capabilities: ["Client lookups", "Risk assessments", "Portfolio analysis"],
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
  },
  {
    icon: FileText,
    name: "Document Search Agent",
    description:
      "Tracks document validity, expiration status, and compliance frameworks",
    capabilities: [
      "Document audits",
      "Expiration alerts",
      "Compliance verification",
    ],
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Scale,
    name: "Regulation Search Agent",
    description:
      "Researches regulations, jurisdictions, penalties, and compliance frameworks",
    capabilities: [
      "Regulatory compliance",
      "Penalty analysis",
      "Jurisdictional requirements",
    ],
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Package,
    name: "Product Search Agent",
    description:
      "Analyzes investment products, minimums, and compliance requirements",
    capabilities: [
      "Product suitability",
      "Documentation requirements",
      "Eligibility checks",
    ],
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-500",
  },
  {
    icon: BookOpen,
    name: "Compliance Knowledge Agent",
    description:
      "Provides authoritative guidance on AML/KYC, OFAC, and regulatory procedures",
    capabilities: ["Compliance rules", "Best practices", "Procedural guidance"],
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-500",
  },
  {
    icon: Cpu,
    name: "Platform Knowledge Agent",
    description:
      "Explains platform features, architecture, ROI, and integration capabilities",
    capabilities: [
      "Platform capabilities",
      "Technical details",
      "Business value",
    ],
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-500",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Multi-Agent AI System
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ComplianceIQ coordinates{" "}
            <span className="text-primary font-semibold">
              multi agent compliance orchestration{" "}
            </span>{" "}
            that work together like a well-orchestrated compliance team
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Central supervisor */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-card border-2 border-primary rounded-2xl px-8 py-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Supervisor Agent</div>
                      <div className="text-sm text-muted-foreground">
                        Orchestrates all specialized agents
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection lines */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${agent.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`h-6 w-6 ${agent.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1">{agent.name}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {agent.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-primary mb-2">
                      Key Capabilities:
                    </div>
                    {agent.capabilities.map((capability) => (
                      <div
                        key={capability}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How they work together */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Intelligent Orchestration
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Supervisor Agent intelligently routes your requests to the
              right specialists, synthesizes their findings, and proactively
              identifies compliance gaps. It's like having a team of experts
              working together seamlessly—automatically generating audit-ready
              reports, signature-ready documents, and actionable
              recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-background rounded-full border border-border">
                ✅ Proactive Gap Detection
              </div>
              <div className="px-4 py-2 bg-background rounded-full border border-border">
                ✅ Auto-Generated Documents
              </div>
              <div className="px-4 py-2 bg-background rounded-full border border-border">
                ✅ Real-Time Collaboration
              </div>
              <div className="px-4 py-2 bg-background rounded-full border border-border">
                ✅ Audit-Ready Reports
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
