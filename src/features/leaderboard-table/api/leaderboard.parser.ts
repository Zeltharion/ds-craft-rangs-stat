import * as cheerio from 'cheerio'
import { LeaderBoardPlayer } from '@/entities/leaderboard-player'
import { Rang } from '@/entities/rang'
import { parseNumber } from '@/shared/lib/parse-number'

export const leaderBoardParser = (data: any): LeaderBoardPlayer[] => {
	const $ = cheerio.load(data)

	const leaderboard = $('table.bl-table tr')
	const accounts: LeaderBoardPlayer[] = []

	leaderboard.each((index, element) => {
		if (index === 0) return

		const $row = $(element)
		const cells = $row.find('td')

		if (cells.length < 6) return

		const positionCell = $(cells[0])
		let position: string

		// Первые 3 места
		const icon = positionCell.find('i')
		if (icon.length > 0) {
			const iconClass = icon.attr('class')
			if (iconClass?.includes('fa-crown')) {
				position = '1'
			} else if (iconClass?.includes('fa-trophy')) {
				const color = icon.attr('style')?.match(/color: (#[a-fA-F0-9]+)/)?.[1]
				position = color === '#c5c9c7' ? '2' : '3'
			} else {
				position = positionCell.text().trim()
			}
		} else {
			position = positionCell.text().trim()
		}

		const likesText = $(cells[1]).text().trim()
		const nickname = $(cells[2]).text().trim()
		const rangText = $(cells[3]).find('div.name span').text().trim() || $(cells[3]).find('div.name').text().trim()
		const killsText = $(cells[4]).text().trim()
		const boosterText = $(cells[5]).find('span').text().trim() || '0'

		let rang: Rang | null = null
		if (rangText) {
			const rangKey = Object.keys(Rang).find(key => Rang[key as keyof typeof Rang] === rangText)

			if (rangKey) {
				rang = Rang[rangKey as keyof typeof Rang]
			}
		}

		const account: LeaderBoardPlayer = {
			position: parseInt(position),
			nickname,
			likes: parseNumber(likesText),
			kills: parseNumber(killsText),
			rang,
			booster: parseInt(boosterText)
		}

		accounts.push(account)
	})

	return accounts
}
