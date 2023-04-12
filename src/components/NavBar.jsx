import { Link } from "react-router-dom";
import "../App.css";
export default function navbar() {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>
			<Link to="/player">All Players</Link>
			<Link to="/player.id">Single Player</Link>
			<Link to="./NewPlayerForm.jsx">New Player</Link>
		</div>
	);
}
