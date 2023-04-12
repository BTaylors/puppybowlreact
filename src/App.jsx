import "./App.css";
import "./index.jsx";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/:dogId" element={<SinglePlayer />} />
				<Route path="/form" element={<NewPLayerForm />} />
			</Routes>
		</div>
	);
}

export default App;
