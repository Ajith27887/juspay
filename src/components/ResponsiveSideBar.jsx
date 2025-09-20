import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import CloseIcon from "@mui/icons-material/Close";
import "./css/Dashboard.css";

function ResponsiveExample({ onSidebarToggle }) {
	const [show, setShow] = useState(false);

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

	return (
		<>
			<Button variant="none" onClick={handleToggle}>
				<ViewSidebarOutlinedIcon />
			</Button>

			<Offcanvas
				show={show}
				onHide={handleClose}
				backdrop={false}
				style={{ zIndex: 0, width: "var(--sidebar-width)" }}
			>
				<Offcanvas.Header>
					<Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
			</Offcanvas>
		</>
	);
}
export default ResponsiveExample;
