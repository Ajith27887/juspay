import React from "react";
import "./css/Cover.css";
import VectorImage from "./images/Vector.png";
import greenEllipse from "./images/EllipseG.png";
import ellipase from "./images/Ellipse.png";
import { Link } from "react-router-dom";

function Cover() {
	return (
		<div className="cover-bg">
			<div className="cover">
				<img src={VectorImage} className="vector" alt="VectorImage" />
				<img src={greenEllipse} className="green" alt="Green" />
				<img src={ellipase} className="ellipase" alt="rose" />
				<div className="content">
					<Link to="/Dashboard" className="assign">
						Assignment
					</Link>
					<div className="heading">
						<h1>
							UI Developer <br /> Assignment
						</h1>
					</div>
					<h2>COMPANY</h2>
					<p>Juspay Technologies Private Limited</p>
				</div>
			</div>
		</div>
	);
}

export default Cover;
