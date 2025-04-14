import { Rang } from '@/entities/rang'

export interface RangStat {
	name: Rang
	value: number
	percentage: number
	color: string
}

export interface BoosterStat {
	name: string
	value: number
	percentage: number
	color: string
}
