export const getBoosterColor = (booster: number): string => {
	if (booster === 0) return '#888888'
	if (booster <= 5) return '#4CAF50'
	if (booster <= 10) return '#2196F3'
	return '#9C27B0'
}
