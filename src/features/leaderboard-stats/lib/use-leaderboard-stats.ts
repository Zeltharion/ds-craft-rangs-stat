import { useEffect, useState } from 'react'
import { LeaderBoardPlayer } from '@/entities/leaderboard-player'

export const useLeaderboardStats = () => {
	const [data, setData] = useState<LeaderBoardPlayer[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true)
				const response = await fetch('/ds-craft-rangs.json')
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const jsonData = await response.json()
				setData(jsonData)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [])

	return { data, loading, error }
}
