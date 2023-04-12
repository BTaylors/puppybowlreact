import { Link } from "react-router-dom";
import "../App.css";
export default function navbar() {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>
			<Link to="/player.id">Find a Dog</Link>
			<Link to="./NewPlayerForm.jsx">New Dog!</Link>
		</div>
	);
}
