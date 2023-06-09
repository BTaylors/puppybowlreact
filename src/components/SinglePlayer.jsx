import React, { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../ajaxHelpers/puppies.js";
import { removePlayer } from "../ajaxHelpers/puppies.js";
import { useParams } from "react-router-dom";
import "../App.css";

export default function SinglePlayer() {
	const { dogID } = useParams();
	const [dog, setDog] = useState(null);

	useEffect(() => {
		async function getDog() {
			const dogFromApi = await fetchSinglePlayer(dogID);
			console.log(dogFromApi);
			setDog(dogFromApi);
		}
		getDog();
	}, []);
	return (
		<div>
			{dog && (
				<ul>
					<li>Name: {dog.name}</li>
					<li>Breed: {dog.breed}</li>
					<li>Status: {dog.status}</li>
					<li>
						<img src={dog.imageUrl} />
					</li>
				</ul>
			)}
			<button
				id="removeButton"
				onClick={() => removePlayer(dog.id)}
				type="submit"
			>
				Delete dog!
			</button>
		</div>
	);
}
