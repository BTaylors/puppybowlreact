import { Link } from "react-router-dom";
import "../App.css";
export default function navbar() {
	return (
		<div id="navbar">
			<Link to="/">Home</Link>
			<Link to="/form">New Dog!</Link>
		</div>
	);
}
