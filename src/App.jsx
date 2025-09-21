import "./App.css";
import Cover from "./components/Cover";
import Dashboard from "./components/Dashboard";
import Default from "./components/Default";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Cover />} />
					<Route path="/Dashboard" element={<Dashboard />}>
						<Route index element={<Default />} />
						<Route path="Default" element={<Default />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
