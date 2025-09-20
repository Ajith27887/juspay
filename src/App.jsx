import "./App.css";
import Cover from "./components/Cover";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Cover />} />
					<Route path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
