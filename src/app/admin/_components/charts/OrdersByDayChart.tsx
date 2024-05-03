'use client';

import { formatCurrency } from '@/lib/formatters';
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const data = [
	{ value: 12, date: '2024-12-12' },
	{ value: 25, date: '2024-12-11' },
	{ value: 5, date: '2024-12-10' },
];

export function OrdersByDayChart() {
	return (
		<ResponsiveContainer width='100%' minHeight={300}>
			<LineChart data={data}>
				<CartesianGrid stroke='hsl(var(--muted))' />
				<XAxis dataKey='date' stroke='hsl(var(--primary))' />
				<YAxis tickFormatter={(tick) => formatCurrency(tick)} stroke='hsl(var(--primary))' />
				<Tooltip formatter={(value) => formatCurrency(value as number)} />
				<Line
					dot={false}
					dataKey='value'
					type='monotone'
					name='Total Sales'
					stroke='hsl(var(--primary))'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
