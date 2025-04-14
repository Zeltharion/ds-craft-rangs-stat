import { Badge } from '@/shared/ui/badge'
import { getRangColor, getRangDisplayName } from '../lib/utils'
import { Rang } from '../model/rangs.model'

export const RangBadge = ({ rang }: { rang: Rang | null }) => {
	return (
		<Badge variant='secondary' style={{ color: getRangColor(rang) }}>
			{getRangDisplayName(rang)}
		</Badge>
	)
}
