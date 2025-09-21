import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DashboardSideBar from "./DashboardSideBar.jsx";
import { useRef, useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Outlet } from "react-router-dom";
import "./css/Dashboard.css";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import { SidemenuContext } from "./SidemenuProvider.jsx";

function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { theme, setTheme } = useContext(SidemenuContext);
	const searchRef = useRef(null);

	const handleSidebarToggle = (isOpen) => {
		setSidebarOpen(isOpen);
	};

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			// Detect Command (Mac) or Ctrl (Windows/Linux) + /
			if ((e.metaKey || e.ctrlKey) && e.key === "/") {
				e.preventDefault(); // prevent default browser behavior
				searchRef.current?.focus(); // focus the input
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div className={`dashboard-container ${theme === "dark" ? "Dark" : ""} ${sidebarOpen ? "sidebar-open" : ""}`}>
			<Navbar expand="sm" className={`${theme === "dark" ? "Dark" : ""}`}>
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

						<div className="d-md-flex d-none align-items-center ">
							<div style={{ position: "relative", width: "300px" }}>
								<Form.Control
									ref={searchRef}
									type="search"
									className="rounded-4"
									placeholder="Search"
									aria-label="Search"
									style={{ paddingRight: "50px" }} // space for the symbol
								/>
								<span
									style={{
										position: "absolute",
										right: "10px",
										top: "50%",
										transform: "translateY(-50%)",
										color: "#999",
										fontWeight: "bold",
										pointerEvents: "none",
									}}
								>
									⌘/
								</span>
							</div>
							<Nav.Link className="ms-4">
								<i className="bi bi-brightness-high" onClick={handleTheme}></i>
							</Nav.Link>
							<Nav.Link className="ms-2">
								<HistoryIcon />
							</Nav.Link>
							<Nav.Link className="ms-2">
								<NotificationsIcon />
							</Nav.Link>
							<Nav.Link className="ms-2">
								<ViewSidebarOutlinedIcon />
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
