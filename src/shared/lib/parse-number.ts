export const parseNumber = (str: string): number => {
	const cleaned = str.replace(/[^0-9K]/g, '')
	if (cleaned.endsWith('K')) {
		return parseInt(cleaned.replace('K', '')) * 1000
	}
	return parseInt(cleaned)
}
