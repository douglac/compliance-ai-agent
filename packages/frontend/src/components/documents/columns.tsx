'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ComplianceDocument } from '@/types/documents'
import { ColumnDef } from '@tanstack/react-table'
import {
  ArrowUpDown,
  Download,
  Eye,
  FileText,
  MoreHorizontal,
} from 'lucide-react'

const getStatusColor = (status: string) => {
  switch (status) {
    case 'valid':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'expiring':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'expired':
      return 'bg-red-100 text-red-800 hover:bg-red-100'
    case 'pending':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

const getRiskLevelColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'low':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'high':
      return 'bg-red-100 text-red-800 hover:bg-red-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

export const columns: ColumnDef<ComplianceDocument>[] = [
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          <FileText className="mr-2 h-4 w-4" />
          Document Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const type = row.getValue('type') as string
      return (
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <span className="font-medium">{type}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'clientName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          Client
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue('clientName')}</div>
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge
          variant="secondary"
          className={cn('capitalize', getStatusColor(status))}
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'issueDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          Issue Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('issueDate'))
      return <div className="text-sm">{date.toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: 'expiryDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          Expiry Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue('expiryDate') as string | null
      if (!date) return <span className="text-gray-400 text-sm">N/A</span>
      const expiryDate = new Date(date)
      const today = new Date()
      const daysUntilExpiry = Math.ceil(
        (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      )

      return (
        <div className="text-sm">
          <div>{expiryDate.toLocaleDateString()}</div>
          {daysUntilExpiry > 0 && daysUntilExpiry <= 30 && (
            <div className="text-xs text-yellow-600 font-medium">
              {daysUntilExpiry} days remaining
            </div>
          )}
          {daysUntilExpiry < 0 && (
            <div className="text-xs text-red-600 font-medium">
              Expired {Math.abs(daysUntilExpiry)} days ago
            </div>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: 'complianceScore',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="h-8 px-2 -ml-2"
        >
          Score
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const score = row.getValue('complianceScore') as number | null
      if (score === null)
        return <span className="text-gray-400 text-sm">N/A</span>

      const color =
        score >= 90
          ? 'text-green-600'
          : score >= 70
          ? 'text-yellow-600'
          : 'text-red-600'
      return <div className={cn('font-semibold', color)}>{score}/100</div>
    },
  },
  {
    accessorKey: 'riskLevel',
    header: 'Risk Level',
    cell: ({ row }) => {
      const riskLevel = row.getValue('riskLevel') as string
      return (
        <Badge
          variant="secondary"
          className={cn('capitalize', getRiskLevelColor(riskLevel))}
        >
          {riskLevel}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'tenantId',
    header: 'Tenant',
    cell: ({ row }) => {
      const tenantId = row.getValue('tenantId') as string
      const displayName = tenantId.replace('tenant-', '').replace('-001', '')
      return (
        <div className="text-xs text-gray-500 capitalize">{displayName}</div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const document = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(document.id)}
            >
              Copy document ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </DropdownMenuItem>
            <DropdownMenuItem>Edit document</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete document
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
