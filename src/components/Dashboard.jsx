import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import ResponsiveExample from "./ResponsiveSideBar";
import { useState } from "react";
import "./css/Dashboard.css";

function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSidebarToggle = (isOpen) => {
		setSidebarOpen(isOpen);
	};

	return (
		<div className={`dashboard-container ${sidebarOpen ? "sidebar-open" : ""}`}>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						<ResponsiveExample onSidebarToggle={handleSidebarToggle} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<div className="d-flex justify-content-between w-100">
							<div className="d-flex">
								<Nav.Link href="#">
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

						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
						{/* </Nav> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Dashboard;
