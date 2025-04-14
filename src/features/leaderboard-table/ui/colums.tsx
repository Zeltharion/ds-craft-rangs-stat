import { ColumnDef } from '@tanstack/react-table'
import { LeaderBoardPlayer } from '@/entities/leaderboard-player'
import { RangBadge } from '@/entities/rang'

export const columns: ColumnDef<LeaderBoardPlayer>[] = [
	{
		header: '#',
		accessorKey: 'position'
	},
	{
		header: 'Игрок',
		accessorKey: 'nickname'
	},
	{
		header: 'Ранг',
		accessorKey: 'rang',
		cell: ({ row }) => <RangBadge rang={row.original.rang} />
	},
	{
		header: 'Лайки',
		accessorKey: 'likes'
	},
	{
		header: 'Киллы',
		accessorKey: 'kills'
	},
	{
		header: 'Бустер',
		accessorKey: 'booster'
	}
]
