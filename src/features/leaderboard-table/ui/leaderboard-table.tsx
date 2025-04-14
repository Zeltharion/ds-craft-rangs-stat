import { observer } from 'mobx-react-lite'
import { leaderboardStore } from '@/features/leaderboard-table'
import { DataTable } from '@/shared/ui/index'
import { columns } from './colums'

export const LeaderboardTable = observer(() => {
	const { leaderboard, loading, error, currentPage, nextPage, previousPage } = leaderboardStore

	return (
		<section className='grid gap-4'>
			<DataTable
				columns={columns}
				data={leaderboard}
				loading={loading}
				errorText={error ? 'Ошибка при загрузке данных' : ''}
				onNextPage={nextPage}
				onPreviousPage={previousPage}
				currentPage={currentPage}
			/>
		</section>
	)
})
