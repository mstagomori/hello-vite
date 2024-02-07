import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";

export default function Home() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact Component={Login} />
			</Routes>
		</BrowserRouter>
	);
}
