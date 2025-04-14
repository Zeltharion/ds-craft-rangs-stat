import { Rang } from '@/entities/rang'

export interface LeaderBoardPlayer {
	position: number
	nickname: string
	likes: number
	kills: number
	rang: Rang | null
	booster: number | null
}
