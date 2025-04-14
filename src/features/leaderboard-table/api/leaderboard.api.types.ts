type LeaderboardServer = 'skypvp' | 'skyblock'

interface LeaderBoardRequest {
	server: LeaderboardServer
	page: number
}

export type { LeaderBoardRequest, LeaderboardServer }
