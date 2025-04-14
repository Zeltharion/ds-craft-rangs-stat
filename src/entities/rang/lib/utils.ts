import { Rang } from '../model/rangs.model'
import { rangColors } from '../model/rangs.model'

/**
 * Получить отображаемое имя ранга
 * @param rang - Ранг
 * @returns Отображаемое имя ранга или исходное значение, если ранг не найден
 */
export function getRangDisplayName(rang: Rang | null): string {
	if (!rang) return 'Нет ранга'
	return rang
}

/**
 * Получить цвет ранга
 * @param rang - Ранг
 * @returns Цвет ранга или цвет по умолчанию, если ранг не найден
 */
export function getRangColor(rang: Rang | null): string {
	if (!rang) return '#CCCCCC' // Цвет по умолчанию
	return rangColors[rang]
}
