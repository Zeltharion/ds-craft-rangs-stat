import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { Skeleton } from '@/shared/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'
import { cn } from '../lib/tw-merge'
import { DataTablePagination } from './pagination'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	loading?: boolean
	emptyText?: string
	errorText?: string
	pageSize?: number
	withPagination?: boolean
	hasMore?: boolean
	onNextPage?: () => void
	onPreviousPage?: () => void
	currentPage?: number
}

export function DataTable<TData, TValue>({
	columns,
	data,
	loading,
	emptyText = 'Ничего не найдено',
	errorText = 'Ошибка при загрузке данных',
	pageSize = 15,
	withPagination = true,
	onNextPage,
	onPreviousPage,
	currentPage = 0
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: withPagination ? pageSize : undefined,
				pageIndex: currentPage
			}
		}
	})

	return (
		<div className='flex flex-col gap-4'>
			{withPagination && (
				<DataTablePagination
					table={table}
					loading={loading}
					onNextPage={onNextPage}
					onPreviousPage={onPreviousPage}
				/>
			)}
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map(headerGroup => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map(header => {
								return (
									<TableHead key={header.id}>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{loading ? (
						Array.from({ length: 12 }).map((_, index) => (
							<TableRow key={index}>
								{Array.from({ length: columns.length }).map((_, index) => (
									<TableCell key={index}>
										<Skeleton className='h-5' />
									</TableCell>
								))}
							</TableRow>
						))
					) : table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map(row => (
							<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className={cn('h-24 text-center', errorText && 'text-destructive')}
							>
								{emptyText || errorText}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}
