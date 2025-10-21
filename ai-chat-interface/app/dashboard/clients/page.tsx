'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { Search } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { useEffect, useMemo, useState } from 'react'

type Client = {
  id: string
  name: string
  type: 'Individual'
  risk_level: 'Low' | 'Medium' | 'High'
  net_worth: number
  onboarding_date: string
  last_review_date: string
  preferred_contact_times: string[]
  investment_preferences: string[]
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useQueryState('search', { defaultValue: '' })

  useEffect(() => {
    // Fetch clients from API
    fetch('/api/clients')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array before setting
        if (Array.isArray(data)) {
          setClients(data)
        } else {
          console.error('[v0] Invalid data format:', data)
          setClients([])
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('[v0] Error fetching clients:', error)
        setClients([])
        setIsLoading(false)
      })
  }, [])

  // Filter clients based on search query
  const filteredClients = useMemo(() => {
    if (!search) return clients

    const searchLower = search.toLowerCase()
    return clients.filter((client) =>
      client.name.toLowerCase().includes(searchLower)
    )
  }, [clients, search])

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">
            Manage your client relationships
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {filteredClients.length} {search ? 'Found' : 'Total'}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Clients</CardTitle>
              <CardDescription>
                Individual clients and their compliance information
              </CardDescription>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search clients by name..."
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
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredClients.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg font-medium text-muted-foreground">
                {search
                  ? 'No clients found matching your search'
                  : 'No clients found'}
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
                  <TableHead>Client Name</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Net Worth</TableHead>
                  <TableHead>Onboarding Date</TableHead>
                  <TableHead>Last Review</TableHead>
                  <TableHead>Preferred Contact Times</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage
                            src="/placeholder.svg"
                            alt={client.name}
                          />
                          <AvatarFallback>
                            {client.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{client.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          client.risk_level === 'Low'
                            ? 'default'
                            : client.risk_level === 'Medium'
                            ? 'secondary'
                            : 'destructive'
                        }
                      >
                        {client.risk_level}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${client.net_worth.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(client.onboarding_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(client.last_review_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {client.preferred_contact_times.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          <span className="text-sm">
                            {client.preferred_contact_times[0]}
                          </span>
                          {client.preferred_contact_times.length > 1 && (
                            <Badge variant="outline" className="w-fit text-xs">
                              +{client.preferred_contact_times.length - 1} more
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">
                          Not specified
                        </span>
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
