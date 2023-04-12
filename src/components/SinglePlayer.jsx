import React, { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../ajaxHelpers/puppies.js";
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
	console.log("Dog: ", dog);
	return (
		<div>
			{dog && (
				<ul>
					<li>Name: {dog.name}</li>
					<li>Breed: {dog.breed}</li>
				</ul>
			)}
		</div>
	);
}
