import "./App.css";
import "./index.jsx";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
// import NewPlayerForm from "./components/NewPlayerForm";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<AllPlayers />} />
				<Route path="/dog/:dogID" element={<SinglePlayer />} />

				{/* <Route path="/form" element={<NewPlayerForm />} /> */}
			</Routes>
		</div>
	);
}

export default App;
