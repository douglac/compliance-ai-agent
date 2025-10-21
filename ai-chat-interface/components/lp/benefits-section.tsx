"use client";

import { TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    stat: "90%",
    label: "Time Savings",
    description: "Reduce compliance tasks from hours to minutes with intelligent automation",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    stat: "$250K+",
    label: "Annual Savings",
    description: "Average cost reduction through automation and error prevention",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Users,
    stat: "10x",
    label: "Capacity Increase",
    description: "Handle 10x more clients with the same compliance team size",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    stat: "99.9%",
    label: "Accuracy Rate",
    description: "Eliminate manual errors with AI-powered verification and validation",
    color: "from-orange-500 to-red-500",
  },
];

const beforeAfter = [
  {
    task: "Client onboarding documentation",
    before: "2-3 hours",
    after: "5 minutes",
  },
  {
    task: "KYC/AML compliance check",
    before: "45-60 minutes",
    after: "2 minutes",
  },
  {
    task: "Document expiration tracking",
    before: "Manual spreadsheets",
    after: "Automatic alerts",
  },
  {
    task: "Regulatory research",
    before: "1-2 hours",
    after: "Instant answers",
  },
  {
    task: "Audit report generation",
    before: "4-6 hours",
    after: "1 click",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real Results,
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Real ROI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact ComplianceIQ delivers to firms like yours
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${benefit.color} opacity-20 flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">
                    {benefit.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Before/After comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 divide-x divide-border">
              {/* Before column */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <h3 className="text-xl font-bold">Before ComplianceIQ</h3>
                </div>
                <div className="space-y-4">
                  {beforeAfter.map((item) => (
                    <div key={item.task} className="pb-4 border-b border-border last:border-0">
                      <div className="text-sm font-medium mb-1">{item.task}</div>
                      <div className="text-red-500 text-sm font-semibold">{item.before}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* After column */}
              <div className="p-8 bg-gradient-to-br from-primary/5 to-blue-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <h3 className="text-xl font-bold">With ComplianceIQ</h3>
                </div>
                <div className="space-y-4">
                  {beforeAfter.map((item) => (
                    <div key={item.task} className="pb-4 border-b border-border last:border-0">
                      <div className="text-sm font-medium mb-1">{item.task}</div>
                      <div className="text-green-500 text-sm font-semibold">{item.after}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI calculator tease */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-2xl px-8 py-6">
            <p className="text-lg font-semibold mb-2">
              Calculate your potential savings with ComplianceIQ
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Most firms see ROI within the first 30 days
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              <span>Schedule a demo to see your custom ROI analysis</span>
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
