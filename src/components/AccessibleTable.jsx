import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./css/AccessibleTable.css";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("ASOS Ridley High Waist", "$79.49", 82, 518.18),
	createData("Marco Lightweight Shirt", "$128.50", 37, 754.5),
	createData("Half Sleeve  Shirt", "$39.99", 64, 559.36),
	createData("Lightweight Jacket", "$20.00", 184, 680.0),
	createData("Marco Shoes", "$79.49", 64, 965.81),
];

export default function AccessibleTable() {
	return (
		<TableContainer style={{ background: "#F7F9FB", boxShadow: "none" }} className="p-3" component={Paper}>
			<h6>Top Selling Products</h6>
			<Table sx={{ minWidth: 650 }} aria-label="caption table">
				<TableHead>
					<TableRow sx={{ "& th": { borderBottom: "2px solid rgba(0,0,0,0.12)" } }}>
						<TableCell>Name</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Quantity</TableCell>
						<TableCell align="right">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
								{row.name}
							</TableCell>
							<TableCell sx={{ borderBottom: "none" }} align="right">
								{row.calories}
							</TableCell>
							<TableCell sx={{ borderBottom: "none" }} align="right">
								{row.fat}
							</TableCell>
							<TableCell sx={{ borderBottom: "none" }} align="right">
								{row.carbs}
							</TableCell>
							<TableCell sx={{ borderBottom: "none" }} align="right">
								{row.protein}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
