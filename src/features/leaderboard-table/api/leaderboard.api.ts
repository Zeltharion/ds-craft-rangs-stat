import { LeaderBoardPlayer } from '@/entities/leaderboard-player'
import { api } from '@/shared/api/axios'
import { LeaderBoardRequest } from './leaderboard.api.types'
import { leaderBoardParser } from './leaderboard.parser'

const LEADERBOARD_URL = 'plugins/rangs/index.php'

export const leaderboardApi = {
	async get(request: LeaderBoardRequest): Promise<LeaderBoardPlayer[]> {
		const { data } = await api.get(LEADERBOARD_URL, {
			params: {
				server: request.server,
				page: request.page
			}
		})

		return leaderBoardParser(data)
	}
}
