import * as React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [3000000, 6000000, 5000000, 7000000, 5500000, 5500000];
const pData = [18000000, 20000000, 18000000, 22000000, 14000000, 21000000];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function StackedBarChart() {
	return (
		<Box sx={{ width: "100%", height: 300 }}>
			<BarChart
				series={[
					{
						data: pData,
						id: "pvId",
						stack: "total",
						bar: { barThickness: 10 },
						color: "#1f77b4",
					},
					{
						data: uData,
						id: "uvId",
						stack: "total",
						color: "#A8C5DA",
						bar: { barThickness: 10 },
					},
				]}
				xAxis={[{ data: xLabels, categoryGapRatio: 0.6, barGapRatio: 0.2 }]}
				yAxis={[
					{
						width: 50,
						min: 0,
						max: 30000000,
						tickValues: [0, 10000000, 20000000, 30000000],
						axisLine: { display: false },
						valueFormatter: (value) => {
							if (value === 0) return "0";
							return `${value / 1000000}M`;
						},
					},
				]}
				barCategoryGapRatio={0.5} // default ~0.8 → smaller = thinner bars
				barGapRatio={0.1}
				grid={{ horizontal: true }}
				sx={{
					"& .MuiChartsAxis-line": {
						display: "none",
						stroke: "none",
					},
					"& .MuiChartsGrid-root": {
						"& .MuiChartsGrid-line": {
							// stroke: "#e0e0e0",

							strokeDasharray: "2 2",
						},
					},
				}}
			/>
		</Box>
	);
}
