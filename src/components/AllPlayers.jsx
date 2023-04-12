import { useState, useEffect } from "react";
import { fetchAllPlayers } from "./ajaxHelpers";
import { useNavigate } from "react";

export default function AllPlayers() {
	const naviagte = useNavigate();
	const [dogs, setDogs] = useState({});

	useEffect(() => {
		async function fetchAllPlayers() {
			const playerList = await fetchAllPlayers();
			setDogs(playerList);
		}
		fetchAllPlayers();
	}, []);
	return (
		<div>
			{dogs.map((dog) => {
				return (
					<p
						onClick={() => {
							naviagte(`/${dog.id}`);
						}}
					>
						{dog.name}
					</p>
				);
			})}
		</div>
	);
}
