import React from "react";
import "./css/Orders.css";
import { Form } from "react-bootstrap";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import profile from "./images/Profile.png";
import orderOne from "./images/orderone.png";
import order2 from "./images/order2.png";
import order3 from "./images/order3.png";
import order4 from "./images/order4.png";

function Orders() {
	function createData(name, src, calories, fat, carbs, protein, Date, Status) {
		return { name, src, calories, fat, carbs, protein, Date, Status };
	}
	const rows = [
		createData(
			"#CM9801",
			profile,
			"Natali Craig",
			"Landing Page",
			"Meadow Lane Oakland",
			"Just now",
			"In Progress"
		),
		createData(
			"#CM9802",
			orderOne,
			"Kate Morrison",
			"Landing Page",
			"Meadow Lane Oakland",
			"A minute ago",
			"Complete"
		),
		createData("#CM9803", order2, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
		createData(
			"#CM9804 ",
			order3,
			"Orlando Diggs",
			"Admin Dashboard",
			"Washburn Baton Rouge",
			"Yesterday",
			"Approved"
		),
		createData("#CM9805", order4, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
		createData(
			"#CM9801",
			profile,
			"Natali Craig",
			"Landing Page",
			"Meadow Lane Oakland",
			"Just now",
			"In Progress"
		),
		createData(
			"#CM9802",
			orderOne,
			"Kate Morrison",
			"Landing Page",
			"Meadow Lane Oakland",
			"A minute ago",
			"Complete"
		),
		createData("#CM9803", order2, "Drew Cano", "Client Project", "Bagwell Avenue Ocala", "1 hour ago", "Pending"),
		createData(
			"#CM9804 ",
			order3,
			"Orlando Diggs",
			"Admin Dashboard",
			"Washburn Baton Rouge",
			"Yesterday",
			"Approved"
		),
		createData("#CM9805", order4, "Andi Lane", "App Landing Page", "Nest Lane Olivette", "Feb 2, 2023", "Rejected"),
	];
	return (
		<div>
			<h6>Orders</h6>
			<div className="options d-flex justify-content-between align-items : end">
				<div>
					<i className="bi bi-plus-lg"></i>
					<i className="bi bi-filter ms-2"></i>
					<SwapVertIcon className="ms-2" />
				</div>
				<div>
					<Form.Control
						type="search"
						className="rounded-4"
						placeholder="Search"
						aria-label="Search"
						style={{ paddingRight: "50px", borderRadius: "none" }} // space for the symbol
					/>
				</div>
			</div>
			<TableContainer style={{ background: "#F7F9FB", boxShadow: "none" }} className="p-3 mt-5" component={Paper}>
				<h6>Top Selling Products</h6>
				<Table sx={{ minWidth: 650 }} aria-label="caption table">
					<TableHead>
						<TableRow sx={{ "& th": { borderBottom: "2px solid rgba(0,0,0,0.12)" } }}>
							<TableCell>
								<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
								<label htmlFor="vehicle1" className="ms-2">
									{" "}
									Order ID
								</label>
							</TableCell>
							<TableCell align="right">User</TableCell>
							<TableCell align="right">Project</TableCell>
							<TableCell align="right">Address</TableCell>
							<TableCell align="right">Date</TableCell>
							<TableCell align="right">Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
									{row.name}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									<img className="me-3" src={row.src} alt="" srcset="" />
									{row.calories}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									{row.fat}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									{row.carbs}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									<i className="bi bi-calendar me-3"></i>
									{row.protein}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									{row.Date}
								</TableCell>
								<TableCell sx={{ borderBottom: "none" }} align="right">
									{row.Status}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default Orders;
