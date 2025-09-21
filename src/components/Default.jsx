import React from "react";
import "./css/Default.css";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StackedBarChart from "./StackedBarChart";

function Default() {
	return (
		<div className="default-component">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="card">
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
					<div className="col-6">
						<StackedBarChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Default;
