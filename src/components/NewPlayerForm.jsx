import React from "react";
import addNewPlayer from "puppies.js";

export default function NewPlayerForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	return (
		<div>
			<h2>Create a new dog!</h2>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const newDog = await addNewPlayer(name, email);
					console.log("New Dog from API: ", newDog);
				}}
			>
				<label htmlFor="name">Name:</label>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<label htmlFor="breed">Breed</label>
				<input type="text" onChange={(e) => setBreed(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
}
