import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/dog/:dogID" element={<SinglePlayer />} />
				<Route path="/form" element={<NewPlayerForm />} />
			</Routes>
		</div>
	);
}

export default App;
