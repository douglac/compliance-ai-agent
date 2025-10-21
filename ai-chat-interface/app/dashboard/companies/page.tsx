'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Building2, Search } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useEffect, useMemo, useState } from 'react'

type Company = {
  id: string
  name: string
  type: 'Corporate'
  risk_level: 'Low' | 'Medium' | 'High'
  net_worth: number
  onboarding_date: string
  last_review_date: string
  preferred_contact_times: string[]
  investment_preferences: string[]
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useQueryState('search', { defaultValue: '' })

  useEffect(() => {
    // Fetch companies from API
    fetch('/api/companies')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array before setting
        if (Array.isArray(data)) {
          setCompanies(data)
        } else {
          console.error('[v0] Invalid data format:', data)
          setCompanies([])
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('[v0] Error fetching companies:', error)
        setCompanies([])
        setIsLoading(false)
      })
  }, [])

  // Filter companies based on search query
  const filteredCompanies = useMemo(() => {
    if (!search) return companies

    const searchLower = search.toLowerCase()
    return companies.filter((company) =>
      company.name.toLowerCase().includes(searchLower)
    )
  }, [companies, search])

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
          {filteredCompanies.length} {search ? 'Found' : 'Total'}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Companies</CardTitle>
              <CardDescription>
                Corporate clients and their compliance information
              </CardDescription>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search companies by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
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
          ) : filteredCompanies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg font-medium text-muted-foreground">
                {search
                  ? 'No companies found matching your search'
                  : 'No companies found'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {search
                  ? 'Try adjusting your search query'
                  : 'Make sure MongoDB is running and seeded with data'}
              </p>
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
                {filteredCompanies.map((company) => (
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
                          company.risk_level === 'Low'
                            ? 'default'
                            : company.risk_level === 'Medium'
                            ? 'secondary'
                            : 'destructive'
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
  )
}
