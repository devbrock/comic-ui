/**
 * Migrated from: original_version/src/components/ui/data-table.tsx
 */

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";

/**
 * Props specific to `DataTable` (shown first in IntelliSense).
 */
export interface DataTableOwnProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /**
   * If provided, renders a small filter input bound to the specified column id.
   */
  filterColumnId?: string;
  filterPlaceholder?: string;
}

/**
 * Full props for `DataTable`.
 *
 * Note: We intentionally intersect our own props **first** so editors like VSCode
 * surface them at the top of JSX IntelliSense (instead of burying them beneath
 * hundreds of HTML attributes).
 */
export type DataTableProps<TData, TValue> = DataTableOwnProps<TData, TValue> &
  React.ComponentPropsWithoutRef<"div">;

function DataTableColumnHeader({
  title,
  canSort,
  sorted,
  onToggleSort,
}: {
  title: React.ReactNode;
  canSort: boolean;
  sorted: false | "asc" | "desc";
  onToggleSort: () => void;
}) {
  if (!canSort) return <div className="font-body">{title}</div>;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-8 px-2 font-body normal-case tracking-normal"
      onClick={onToggleSort}
    >
      {title}
      <ArrowUpDown className={cn("ml-2 h-4 w-4", sorted ? "opacity-100" : "opacity-50")} />
    </Button>
  );
}

/**
 * shadcn-style Data Table (TanStack Table underneath).
 */
export function DataTable<TData, TValue>({
  className,
  columns,
  data,
  filterColumnId,
  filterPlaceholder = "Filter...",
  ...props
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const filterValue =
    filterColumnId !== undefined ? (table.getColumn(filterColumnId)?.getFilterValue() as string | undefined) : undefined;

  return (
    <div className={cn("space-y-4", className)} {...props}>
      {filterColumnId ? (
        <div className="flex items-center gap-2">
          <Input
            placeholder={filterPlaceholder}
            value={filterValue ?? ""}
            onChange={(e) => table.getColumn(filterColumnId)?.setFilterValue(e.target.value)}
            className="max-w-sm"
          />
          <div className="ml-auto text-sm text-muted-foreground font-body">
            {table.getFilteredRowModel().rows.length} result(s)
          </div>
        </div>
      ) : null}

      <div className="rounded-md border-2 border-ink bg-card shadow-panel">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <DataTableColumnHeader
                          title={flexRender(header.column.columnDef.header, header.getContext())}
                          canSort={canSort}
                          sorted={sorted === false ? false : sorted}
                          onToggleSort={() => header.column.toggleSorting(header.column.getIsSorted() === "asc")}
                        />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center font-body text-muted-foreground">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="font-body normal-case tracking-normal"
        >
          Previous
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="font-body normal-case tracking-normal"
        >
          Next
        </Button>
      </div>
    </div>
  );
}



