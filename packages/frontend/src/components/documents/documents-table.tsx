'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronDown, Filter, X } from 'lucide-react'
import {
  createParser,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from 'nuqs'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// Define parsers for URL state
const typeValues = [
  'all',
  'Accredited Investor',
  'Investment Suitability',
  'Risk Disclosure',
  'Qualified Client',
] as const
const statusValues = ['all', 'valid', 'expiring', 'expired', 'pending'] as const

const parseAsSortingState = createParser({
  parse(query) {
    const [id, direction = 'desc'] = query.split(':')
    return {
      id,
      desc: direction === 'desc',
    }
  },
  serialize(value) {
    return `${value.id}:${value.desc ? 'desc' : 'asc'}`
  },
  eq(a, b) {
    return a.id === b.id && a.desc === b.desc
  },
})

const tableStateParser = {
  // Pagination
  page: parseAsInteger.withDefault(0),
  pageSize: parseAsInteger.withDefault(10),

  // Sorting
  sort: parseAsSortingState.withDefault({ id: 'issueDate', desc: true }),

  // Filters
  type: parseAsStringLiteral(typeValues).withDefault('all'),
  status: parseAsStringLiteral(statusValues).withDefault('all'),
  clientName: parseAsString.withDefault(''),
}

export function DocumentsTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  // Use nuqs for URL state management
  const [tableState, setTableState] = useQueryStates(tableStateParser, {
    shallow: false,
  })

  // Convert single sort object to SortingState array
  const sorting: SortingState = React.useMemo(() => {
    return [tableState.sort]
  }, [JSON.stringify(tableState.sort)])

  // Handle sorting changes
  const onSortingChange = React.useCallback(
    (updater: React.SetStateAction<SortingState>) => {
      console.log('onSortingChange')
      const newSorting =
        typeof updater === 'function' ? updater(sorting) : updater

      // Only store the first sort (single column sorting)
      if (newSorting.length > 0) {
        setTableState({ sort: newSorting[0] })
      }
    },
    []
  )

  // Sync URL state with table filters
  const columnFilters: ColumnFiltersState = React.useMemo(() => {
    const filters: ColumnFiltersState = []

    if (tableState.clientName) {
      filters.push({ id: 'clientName', value: tableState.clientName })
    }
    if (tableState.type !== 'all') {
      filters.push({ id: 'type', value: tableState.type })
    }
    if (tableState.status !== 'all') {
      filters.push({ id: 'status', value: tableState.status })
    }

    return filters
  }, [tableState.clientName, tableState.type, tableState.status])

  const table = useReactTable({
    data,
    columns,
    onSortingChange,
    // onPaginationChange,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableMultiSort: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      // pagination: {
      //   pageIndex: tableState.page,
      //   pageSize: tableState.pageSize,
      // },
    },
    manualPagination: false,
    manualSorting: false,
    manualFiltering: false,
  })

  const clearFilters = () => {
    setTableState(null)
  }

  const hasActiveFilters =
    tableState.type !== 'all' ||
    tableState.status !== 'all' ||
    tableState.clientName.length > 0

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by client name..."
            value={tableState.clientName}
            onChange={(event) =>
              setTableState({ clientName: event.target.value })
            }
            className="max-w-sm"
          />
        </div>

        <Select
          value={tableState.type}
          onValueChange={(value) =>
            setTableState({ type: value as typeof tableState.type })
          }
        >
          <SelectTrigger className="w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Accredited Investor">
              Accredited Investor
            </SelectItem>
            <SelectItem value="Investment Suitability">
              Investment Suitability
            </SelectItem>
            <SelectItem value="Risk Disclosure">Risk Disclosure</SelectItem>
            <SelectItem value="Qualified Client">Qualified Client</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={tableState.status}
          onValueChange={(value) =>
            setTableState({ status: value as typeof tableState.status })
          }
        >
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="valid">Valid</SelectItem>
            <SelectItem value="expiring">Expiring</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} className="h-10 px-3">
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No documents found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Rows per page</p>
            <Select
              value={tableState.pageSize.toString()}
              onValueChange={(value) => {
                setTableState({
                  pageSize: parseInt(value),
                  page: 0, // Reset to first page when changing page size
                })
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={tableState.pageSize.toString()} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize.toString()}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <div className="text-sm text-gray-600">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
