import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Artisan from "./pages/Artisan";
import Legals from "./pages/Legals";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<Layout hero>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/:categorie/artisans"
					element={
						<Layout>
							<Listing />
						</Layout>
					}
				/>
				<Route
					path="/artisans/:id"
					element={
						<Layout>
							<Artisan />
						</Layout>
					}
				/>
				<Route
					path="/legals"
					element={
						<Layout>
							<Legals />
						</Layout>
					}
				/>
				<Route
					path="*"
					element={
						<Layout>
							<NotFound />
						</Layout>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
