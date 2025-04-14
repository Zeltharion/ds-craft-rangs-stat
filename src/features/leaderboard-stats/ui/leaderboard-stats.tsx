import { Skeleton } from '@/shared/ui/skeleton'
import { useLeaderboardStats } from '../lib/use-leaderboard-stats'
import { LeaderboardDiagram } from './leaderboard-diagram'

export const LeaderboardStats = () => {
	const { data, loading, error } = useLeaderboardStats()

	if (loading) {
		return <Skeleton className='h-[300px] w-full' />
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	if (data.length === 0) {
		return <div>Нет данных для отображения</div>
	}

	return <LeaderboardDiagram data={data} />
}
