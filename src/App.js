import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NewFood from "./pages/NewFood";
import SavedFoods from "./pages/SavedFoods";
import FoodLogs from "./pages/FoodLogs";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* header section */}
				<Header></Header>
				{/* main section */}
				<Container textAlign="center">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/new-food" element={<NewFood />} />
						<Route exact path="/saved-foods" element={<SavedFoods />} />
						<Route exact path="/food-logs" element={<FoodLogs />} />
					</Routes>
				</Container>
				{/* footer section */}
				<Footer></Footer>
				{/* https://www.youtube.com/watch?v=ScT4ElKd6eo */}
			</BrowserRouter>
		</div>
	);
}

export default App;
