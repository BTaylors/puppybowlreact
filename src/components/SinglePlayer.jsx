import { fetchSinglePlayer } from "./ajaxHelpers";
import { useParams } from "react-router-dom";
import React from "react";

export default function SinglePlayer() {
	const { dogID } = useParams();
	const [dog, setDog] = useState(null);

	useEffect(() => {
		async function getDog() {
			const dogFromApi = await fetchSinglePlayer(dogId);
			setDog(dogFromApi);
		}
		getDog();
	}, []);

	return (
		<div>
			{dog && (
				<ul>
					<li>Name: {dog.name}</li>
					<li>Age: {dog.age}</li>;
				</ul>
			)}
		</div>
	);
}
