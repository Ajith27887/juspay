import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import "./css/DashboardSideBar.css";
import profile from "./images/Profile.png";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

function DashboardSideBar({ onSidebarToggle }) {
	const [show, setShow] = useState(false);
	const [activeItem, setActiveItem] = useState("Favorites"); // Track which item is active
	const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state
	const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false); // Track projects dropdown state
	const [analyticsDropdownOpen, setAnalyticsDropdownOpen] = useState(false); // Track analytics dropdown state
	const favandrecently = ["Favorites", "Recently"];
	const menuItems = ["Overview", "Projects"];

	const handleToggle = () => {
		if (show) {
			setShow(false);
			onSidebarToggle && onSidebarToggle(false);
		} else {
			setShow(true);
			onSidebarToggle && onSidebarToggle(true);
		}
	};

	const handleClose = () => {
		setShow(false);
		onSidebarToggle && onSidebarToggle(false);
	};

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	const handleDropdownToggle = (isOpen) => {
		console.log("Dropdown toggle:", isOpen); // Debug log
		setDropdownOpen(isOpen);
	};

	const handleProjectsDropdownToggle = (isOpen) => {
		console.log("Projects dropdown toggle:", isOpen); // Debug log
		setProjectsDropdownOpen(isOpen);
	};

	const handleAnalyticsDropdownToggle = (isOpen) => {
		console.log("Analytics dropdown toggle:", isOpen); // Debug log
		setAnalyticsDropdownOpen(isOpen);
	};

	return (
		<div>
			<ViewSidebarOutlinedIcon onClick={handleToggle} className="sidebarIcon" />
			<Offcanvas
				show={show}
				onHide={handleClose}
				backdrop={false}
				style={{ zIndex: 0, width: "var(--sidebar-width)" }}
			>
				<div className="side_header">
					<img src={profile} alt="profile" width={55} />
					<p>ByeWind</p>
				</div>

				<div className="hamburger_header fav d-flex gap-2 text-center mt-3">
					{favandrecently.map((data, i) => (
						<p
							key={i}
							onClick={() => handleItemClick(data)}
							className={activeItem === data ? "active" : ""}
						>
							{data}
						</p>
					))}
				</div>
				<div className="menuitems">
					<ul className="ml-5 cursor">
						{menuItems.map((data, i) => (
							<li key={i}>
								<Link to={"/"}>{data}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="dashboard mt-4">
					<p className="hamburger_header">Dashboards</p>

					<Link to="/Dashboard/Default" className="dashboard-link d-flex align-items-center">
						<i className="fa fa-pie-chart" style={{ fontSize: "24px" }}>
							{" "}
						</i>{" "}
						Default
						<span className="Dot"></span>
					</Link>

					<NavDropdown
						title={
							<span>
								<span className={`dropdown-arrow ${dropdownOpen ? "arrow-down" : ""}`}>▶</span>{" "}
								<i class="bi bi-handbag" style={{ fontSize: "24px" }}></i> eCommerce
							</span>
						}
						id="dashboard-dropdown"
						className="custom-dropdown"
						show={dropdownOpen}
						onToggle={handleDropdownToggle}
					>
						<NavDropdown.Item style={{ display: "block" }} href="#">
							Overview
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown
						title={
							<span>
								<span className={`dropdown-arrow ${projectsDropdownOpen ? "arrow-down" : ""}`}>▶</span>{" "}
								<FolderOpenOutlinedIcon /> Projects
							</span>
						}
						id="projects-dropdown"
						className="custom-dropdown"
						show={projectsDropdownOpen}
						onToggle={handleProjectsDropdownToggle}
					>
						<NavDropdown.Item href="#">Project 1</NavDropdown.Item>
						<NavDropdown.Item href="#">Project 2</NavDropdown.Item>
						<NavDropdown.Item href="#">Project 3</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown
						title={
							<span>
								<span className={`dropdown-arrow ${analyticsDropdownOpen ? "arrow-down" : ""}`}>▶</span>{" "}
								<i class="bi bi-book" style={{ fontSize: "24px" }}></i> Online Course
							</span>
						}
						id="analytics-dropdown"
						className="custom-dropdown"
						show={analyticsDropdownOpen}
						onToggle={handleAnalyticsDropdownToggle}
					>
						<NavDropdown.Item href="#">Reports</NavDropdown.Item>
						<NavDropdown.Item href="#">Charts</NavDropdown.Item>
						<NavDropdown.Item href="#">Statistics</NavDropdown.Item>
						<NavDropdown.Item href="#">Insights</NavDropdown.Item>
					</NavDropdown>
				</div>
			</Offcanvas>
		</div>
	);
}

export default DashboardSideBar;
