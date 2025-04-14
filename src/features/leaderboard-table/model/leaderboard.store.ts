import { makeAutoObservable } from 'mobx'
import { LeaderBoardPlayer } from '@/entities/leaderboard-player'
import { leaderboardApi } from '../api/leaderboard.api'

export class LeaderboardStore {
	leaderboard: LeaderBoardPlayer[] = []
	loading: boolean = false
	error: string | null = null
	currentPage: number = 0

	constructor() {
		makeAutoObservable(this)
		this.getSkyPvP(0)
		this.nextPage = this.nextPage.bind(this)
		this.previousPage = this.previousPage.bind(this)
	}

	setLoading(loading: boolean) {
		this.loading = loading
	}

	setError(error: string | null) {
		this.error = error
	}

	setCurrentPage(page: number) {
		this.currentPage = page
	}

	async getSkyPvP(page: number) {
		try {
			this.setLoading(true)
			const leaderboard = await leaderboardApi.get({ server: 'skypvp', page: this.currentPage })

			this.leaderboard = leaderboard
			this.setCurrentPage(page)
		} catch (error) {
			this.setError(error instanceof Error ? error.message : 'Ошибка при получении данных')
		} finally {
			this.setLoading(false)
		}
	}

	nextPage() {
		if (!this.loading) {
			this.getSkyPvP(this.currentPage + 1)
		}
	}

	previousPage() {
		if (!this.loading && this.currentPage > 0) {
			this.getSkyPvP(this.currentPage - 1)
		}
	}
}

export const leaderboardStore = new LeaderboardStore()
