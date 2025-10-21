"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2 } from "lucide-react";

type Company = {
  id: string;
  name: string;
  type: "Corporate";
  risk_level: "Low" | "Medium" | "High";
  net_worth: number;
  onboarding_date: string;
  last_review_date: string;
  preferred_contact_times: string[];
  investment_preferences: string[];
};

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch companies from API
    fetch("/api/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("[v0] Error fetching companies:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">
            Manage your company partnerships
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {companies.length} Total
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Companies</CardTitle>
          <CardDescription>
            Corporate clients and their compliance information
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Net Worth</TableHead>
                  <TableHead>Onboarding Date</TableHead>
                  <TableHead>Last Review</TableHead>
                  <TableHead>Investment Preferences</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium">{company.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          company.risk_level === "Low"
                            ? "default"
                            : company.risk_level === "Medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {company.risk_level}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${company.net_worth.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(company.onboarding_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(company.last_review_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {company.investment_preferences.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          <span>{company.investment_preferences[0]}</span>
                          {company.investment_preferences.length > 1 && (
                            <Badge variant="outline" className="w-fit text-xs">
                              +{company.investment_preferences.length - 1} more
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">None</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
