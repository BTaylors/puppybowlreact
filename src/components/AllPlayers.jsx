import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../ajaxHelpers/puppies";
import "../App.css";

export default function AllPlayers() {
	const naviagte = useNavigate();
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		async function getAllPlayers() {
			const playerList = await fetchAllPlayers();
			setDogs(playerList);
		}
		getAllPlayers();
	}, []);
	return (
		<div>
			{dogs.map((dog) => {
				return (
					<p
						key={dog.id}
						onClick={() => {
							naviagte(`/dog/${dog.id}`);
						}}
					>
						{dog.name}
					</p>
				);
			})}
		</div>
	);
}
