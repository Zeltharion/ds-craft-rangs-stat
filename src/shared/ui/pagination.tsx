import { ChevronLeft, ChevronRight, ChevronsLeft } from 'lucide-react'
import { Table } from '@tanstack/react-table'
import { Button } from '@/shared/ui/button'

interface DataTablePaginationProps<TData> {
	table: Table<TData>
	loading?: boolean
	onNextPage?: () => void
	onPreviousPage?: () => void
}

export function DataTablePagination<TData>({
	table,
	loading,
	onNextPage,
	onPreviousPage
}: DataTablePaginationProps<TData>) {
	const handleNextPage = () => {
		if (!loading && onNextPage) {
			table.nextPage()
			onNextPage()
		}
	}

	const handlePreviousPage = () => {
		if (!loading && onPreviousPage) {
			table.previousPage()
			onPreviousPage()
		}
	}

	const handleFirstPage = () => {
		if (!loading) {
			table.setPageIndex(0)
		}
	}

	return (
		<div className='flex items-center space-x-2'>
			<Button
				variant='outline'
				className='hidden h-8 w-8 p-0 lg:flex'
				onClick={handleFirstPage}
				disabled={loading}
			>
				<span className='sr-only'>Перейти на первую страницу</span>
				<ChevronsLeft />
			</Button>
			<Button variant='outline' className='h-8 w-8 p-0' onClick={handlePreviousPage} disabled={loading}>
				<span className='sr-only'>Перейти на предыдущую страницу</span>
				<ChevronLeft />
			</Button>
			<Button variant='outline' className='h-8 w-8 p-0' onClick={handleNextPage} disabled={loading}>
				<span className='sr-only'>Перейти на следующую страницу</span>
				<ChevronRight />
			</Button>
		</div>
	)
}
