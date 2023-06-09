import React, { useState } from "react";
import { addNewPlayer } from "../ajaxHelpers/puppies.js";
import "../App.css";

export default function NewPlayerForm() {
	const [name, setName] = useState("");
	const [breed, setBreed] = useState("");
	return (
		<div>
			<h2>Create a new dog!</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const newDog = await addNewPlayer(name, breed);
					console.log("New Dog from API: ", newDog);
				}}
			>
				<label htmlFor="name">Name:</label>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<br />
				<label htmlFor="breed">Breed:</label>
				<input type="text" onChange={(e) => setBreed(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}
