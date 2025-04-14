import { useEffect, useState } from 'react'
import { BOOSTER_PRICES, getBoosterColor } from '@/entities/booster'
import { getRangColor, Rang } from '@/entities/rang'
import { BoosterStat, RangStat } from '../model/stats.model'
import { useLeaderboardStats } from './use-leaderboard-stats'

export const useLeaderboardDiagram = () => {
	const { data } = useLeaderboardStats()

	const [rangStats, setRangStats] = useState<RangStat[]>([])
	const [boosterStats, setBoosterStats] = useState<BoosterStat[]>([])
	const [boosterEarnings, setBoosterEarnings] = useState(0)
	const [totalKills, setTotalKills] = useState(0)

	useEffect(() => {
		const rangCount: Record<string, number> = {}
		let totalRangPlayers = 0
		data.forEach(account => {
			if (account.rang && account.rang !== Rang.PEACEFUL) {
				rangCount[account.rang] = (rangCount[account.rang] || 0) + 1
				totalRangPlayers++
			}
		})

		const rangStatsData = Object.entries(rangCount).map(([rang, count]) => ({
			name: rang as Rang,
			value: count,
			percentage: Number(((count / totalRangPlayers) * 100).toFixed(2)),
			color: getRangColor(rang as Rang)
		}))

		setRangStats(rangStatsData)

		const boosterCount: Record<number, number> = {}
		let totalBoosterPlayers = 0
		let earnings = 0
		data.forEach(account => {
			if (account.booster && account.booster !== 0) {
				boosterCount[account.booster] = (boosterCount[account.booster] || 0) + 1
				totalBoosterPlayers++
				earnings += BOOSTER_PRICES[account.booster] || 0
			}
		})

		const boosterStatsData = Object.entries(boosterCount)
			.map(([booster, count]) => ({
				name: booster,
				value: count,
				percentage: Number(((count / totalBoosterPlayers) * 100).toFixed(2)),
				color: getBoosterColor(Number(booster))
			}))
			.sort((a, b) => Number(a.name) - Number(b.name))

		setBoosterStats(boosterStatsData)
		setBoosterEarnings(earnings)
		setTotalKills(data.reduce((acc, account) => acc + account.kills, 0))
	}, [data])

	return { rangStats, boosterStats, boosterEarnings, totalKills }
}
