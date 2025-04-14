import * as Recharts from 'recharts'
import { boosterIcon } from '@/entities/booster'
import { Badge } from '@/shared/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/ui/chart'
import { useLeaderboardDiagram } from '../lib/use-leaderboard-diagram'

export const LeaderboardDiagram = () => {
	const { rangStats, boosterStats, boosterEarnings, totalKills } = useLeaderboardDiagram()

	return (
		<div className='grid grid-cols-1 2xl:grid-cols-2 gap-4'>
			<Card>
				<CardHeader>
					<CardTitle>Ранги</CardTitle>
					<CardDescription>
						Соотношение игроков к рангу, всего было сделано киллов: {totalKills}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col lg:flex-row items-center lg:items-start gap-4 h-full'>
						<div className='grid sm:grid-cols-3 lg:grid-cols-1 gap-y-2 gap-x-4 min-w-[200px]'>
							{rangStats.map((entry, index) => (
								<div key={index} className='flex items-center justify-between gap-3'>
									<Badge variant='outline' style={{ color: entry.color }}>
										{entry.name}
									</Badge>
									<div className='flex items-center gap-1'>
										<span className='text-white'>{entry.value}</span>
										<span className='text-xs text-muted-foreground'>{`(${entry.percentage}%)`}</span>
									</div>
								</div>
							))}
						</div>
						<ChartContainer
							config={Object.fromEntries(
								rangStats.map(item => [
									item.name,
									{
										label: item.name,
										color: item.color
									}
								])
							)}
							className='h-[300px] flex-1'
						>
							<Recharts.PieChart>
								<ChartTooltip content={<ChartTooltipContent />} />
								<Recharts.Pie
									data={rangStats}
									dataKey='value'
									nameKey='name'
									innerRadius={60}
									outerRadius={80}
									paddingAngle={2}
									cornerRadius={4}
									animationEasing='ease'
									animationDuration={500}
								>
									{rangStats.map((entry, index) => (
										<Recharts.Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Recharts.Pie>
							</Recharts.PieChart>
						</ChartContainer>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className='flex items-start gap-1'>
						<img src={boosterIcon} alt='booster' className='h-7 w-7' />
						<span>Бустеры</span>
					</CardTitle>
					<CardDescription>
						Соотношение игроков к купленному бустеру, всего куплено бустеров на: {boosterEarnings} ₽
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col lg:flex-row items-center lg:items-start  gap-4 h-full'>
						<div className='grid sm:grid-cols-3 lg:grid-cols-1 gap-y-2 gap-x-4 min-w-[200px]'>
							{boosterStats.map((entry, index) => (
								<div key={index} className='flex items-center justify-between gap-3'>
									<Badge variant='outline' style={{ color: entry.color }}>
										{entry.name}x
									</Badge>
									<div className='flex items-center gap-1'>
										<span className='text-white'>{entry.value}</span>
										<span className='text-xs text-muted-foreground'>{`(${entry.percentage}%)`}</span>
									</div>
								</div>
							))}
						</div>
						<ChartContainer
							config={Object.fromEntries(
								boosterStats.map(item => [
									item.name,
									{
										label: `Бустер ${item.name}x`,
										color: item.color
									}
								])
							)}
							className='h-[300px] flex-1'
						>
							<Recharts.PieChart>
								<ChartTooltip content={<ChartTooltipContent />} />
								<Recharts.Pie
									data={boosterStats}
									dataKey='value'
									nameKey='name'
									innerRadius={60}
									outerRadius={80}
									paddingAngle={2}
									cornerRadius={4}
									animationEasing='ease'
									animationDuration={500}
								>
									{boosterStats.map((entry, index) => (
										<Recharts.Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Recharts.Pie>
							</Recharts.PieChart>
						</ChartContainer>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
