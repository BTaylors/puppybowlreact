import { Link } from "react-router-dom";
import "../App.css";
export default function navbar() {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>,
			{/* <Link to="AllPlayers.jsx">All Players</Link>,
			<Link to="SinglePlayer.jsx">Single Player</Link>,
			<Link to="NewPlayerForm.jsx">New Player</Link>, */}
		</div>
	);
}
