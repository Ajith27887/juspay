import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DashboardSideBar from "./DashboardSideBar.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./css/Dashboard.css";

function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSidebarToggle = (isOpen) => {
		setSidebarOpen(isOpen);
	};

	return (
		<div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
			<Navbar expand="sm" className="bg-body-tertiary">
				<Container>
					{/* <Navbar.Brand href="#home"> */}
					<DashboardSideBar onSidebarToggle={handleSidebarToggle} />
					{/* </Navbar.Brand> */}
					<div className="d-flex justify-content-between w-100">
						<div className="d-flex align-items-center">
							<Nav.Link href="#" className="m-2">
								<i className="bi bi-star"></i>
							</Nav.Link>
							<Nav.Link href="#" style={{ color: "#1C1C1C66" }}>
								Dashboards <span> / </span> <span>Default</span>
							</Nav.Link>
						</div>

						<div className="d-flex">
							<Nav.Link href="#">
								<i className="bi bi-star"></i>
							</Nav.Link>
						</div>
					</div>
				</Container>
			</Navbar>

			{/* Main content area where Default component will render */}
			<main className="main-content">
				<Container>
					<Outlet />
				</Container>
			</main>
		</div>
	);
}

export default Dashboard;
