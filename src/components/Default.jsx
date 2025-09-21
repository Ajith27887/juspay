import React, { useContext } from "react";
import "./css/Default.css";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StackedBarChart from "./StackedBarChart";
import RevenueCard from "./LineChart";
import WroldMap from "./images/WorldMap.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import AccessibleTable from "./AccessibleTable";
import PieChartComp from "./PieChartComp.jsx";
import { SidemenuContext } from "./SidemenuProvider.jsx";

function Default() {
	const { theme } = useContext(SidemenuContext);

	return (
		<div className={`default-component `}>
			<div className="container">
				<div className=" stack ">
					<div className={`chart ${theme === "dark" ? "Dark" : ""} rounded`}>
						<div className={`card ${theme === "dark" ? "Dark" : ""}`}>
							<div className="card-body">
								<h6 className="card-title">eCommerce</h6>
								<div className="row mt-4">
									<div className="col-md-5 ">
										<div
											className="card text-white "
											style={{ background: "#E3F5FF", border: "none" }}
										>
											<div
												className="card-body d-flex justify-content-between align-items-end"
												style={{ color: "black" }}
											>
												<div>
													<h6 className="card-title">Customers</h6>
													<h3 className="card-text">3,781</h3>
												</div>
												<p className="text-center align-items-end d-flex">
													+11.01% <TrendingUpOutlinedIcon />
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-5">
										<div className="card text-white" style={{ background: "#F7F9FB" }}>
											<div
												className="card-body d-flex justify-content-between align-items-end"
												style={{ color: "black" }}
											>
												<div>
													<h6 className="card-title">Orders</h6>
													<h3 className="card-text">1,219</h3>
												</div>
												<p className="text-center align-items-end d-flex">
													-0.03% <TrendingUpOutlinedIcon className="ml-2" />
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-5 mt-3">
										<div className="card text-white" style={{ background: "#F7F9FB" }}>
											<div
												className="card-body d-flex justify-content-between align-items-end"
												style={{ color: "black" }}
											>
												<div>
													<h6 className="card-title">Revenue</h6>
													<h3 className="card-text">$695</h3>
												</div>
												<p className="text-center align-items-end d-flex">
													+15.03% <TrendingUpOutlinedIcon className="ml-2" />
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-5 mt-3">
										<div className="card text-white" style={{ background: "#E5ECF6" }}>
											<div
												className="card-body d-flex justify-content-between align-items-end"
												style={{ color: "black" }}
											>
												<div>
													<h6 className="card-title">Growth</h6>
													<h3 className="card-text">30.1%</h3>
												</div>
												<p className="text-center align-items-end d-flex">
													+6.08% <TrendingUpOutlinedIcon className="ml-2" />
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`chart ${theme === "dark" ? "Dark" : ""} rounded`}
						style={{ background: "#F7F9FB" }}
					>
						<StackedBarChart />
					</div>
				</div>
				<div className={`pie ${theme === "dark" ? "Dark" : ""}`}>
					<div
						className={`chart ${theme === "dark" ? "Dark" : ""} rounded`}
						style={{ background: "#F7F9FB" }}
					>
						<RevenueCard />
					</div>
					<div
						className={`chart ${theme === "dark" ? "Dark" : ""} rounded p-3`}
						style={{ background: "#F7F9FB" }}
					>
						<h6 className="text-center">Revenue by Location</h6>
						<img src={WroldMap} className="w-75 mt-3 mx-auto" alt="World Map" />
						<div>
							<div className="d-flex flex-row mt-3 justify-content-between">
								<p>New York</p>
								<p>72k</p>
							</div>
							<ProgressBar
								now={80}
								className="w-100 mt-1"
								style={{ height: "6px", backgroundColor: "#F7F9FB" }}
							>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: "80%", backgroundColor: "#A8C5DA" }}
								/>
							</ProgressBar>
						</div>
						<div>
							<div className="d-flex flex-row mt-3 justify-content-between">
								<p>San Francisco</p>
								<p>39k</p>
							</div>
							<ProgressBar
								now={80}
								className="w-100 mt-1"
								style={{ height: "6px", backgroundColor: "#F7F9FB" }}
							>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: "39%", backgroundColor: "#A8C5DA" }}
								/>
							</ProgressBar>
						</div>
						<div>
							<div className="d-flex flex-row mt-3 justify-content-between">
								<p>Sydney</p>
								<p>25k</p>
							</div>
							<ProgressBar
								now={80}
								className="w-100 mt-1"
								style={{ height: "6px", backgroundColor: "#F7F9FB" }}
							>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: "25%", backgroundColor: "#A8C5DA" }}
								/>
							</ProgressBar>
						</div>
						<div>
							<div className="d-flex flex-row mt-3 justify-content-between">
								<p>Sydney</p>
								<p>61k</p>
							</div>
							<ProgressBar
								now={80}
								className="w-100 mt-1"
								style={{ height: "6px", backgroundColor: "#F7F9FB" }}
							>
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: "61%", backgroundColor: "#A8C5DA" }}
								/>
							</ProgressBar>
						</div>
					</div>
				</div>
				<div className={`pie ${theme === "dark" ? "Dark" : ""}`}>
					<div className={`chart ${theme === "dark" ? "Dark" : ""} rounded`}>
						<AccessibleTable />
					</div>
					<div
						className={`chart ${theme === "dark" ? "Dark" : ""} rounded p-3`}
						style={{ background: "#F7F9FB" }}
					>
						<PieChartComp />
						<ul>
							<li className="direct">Direct</li>
							<li className="Affilliate">Affilliate</li>
							<li className="Sponsored">Sponsored</li>
							<li className="email"> E-mail</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Default;
