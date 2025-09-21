import { Pie, PieChart, ResponsiveContainer, Sector, Cell } from "recharts";

const data = [
	{ name: "Direct", value: 400 },
	{ name: "Sponsored", value: 250 },
	{ name: "E-mail", value: 100 },
	{ name: "Affilliate", value: 300 },
];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderActiveShape = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	startAngle,
	endAngle,
	fill,
	payload,
	percent,
	value,
}) => {
	const RADIAN = Math.PI / 180;
	const sin = Math.sin(-RADIAN * (midAngle ?? 1));
	const cos = Math.cos(-RADIAN * (midAngle ?? 1));
	const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
	const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
	const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
	const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={(outerRadius ?? 0) + 6}
				outerRadius={(outerRadius ?? 0) + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

export default function PieChartComp() {
	const COLORS = ["#00000", "#95A4FC", "#B1E3FF", "#BAEDBD"];

	return (
		<>
			<h6 className="text-center">Total Sales</h6>
			<ResponsiveContainer width="100%" height="70%">
				<PieChart width={400} height={400}>
					<Pie
						activeShape={renderActiveShape}
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={80}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</>
	);
}
