const cohortName = "2301-FTB-ET-WEB-AM";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
	try {
		const response = await fetch(`${APIURL}/players`);
		const result = await response.json();
		return result.data.players;
	} catch (error) {
		console.error("Oops, I couldn't fetch the players!", error);
	}
};

export const fetchSinglePlayer = async (id) => {
	try {
		const response = await fetch(`${APIURL}/players/${id}`);
		const result = await response.json();
		console.log("result", result);
		return result.data.player;
	} catch (error) {
		console.error("Oops, I couldn't fetch the single player!");
	}
};

export const addNewPlayer = async (name, breed) => {
	try {
		const response = await fetch(`${APIURL}/players`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				breed,
			}),
		});
		const createdDog = await response.json();
		return createdDog;
	} catch (error) {
		console.error("Oops, I couldn't add that player!");
	}
};
export const removePlayer = async (id) => {
	try {
		console.log("Remove Player ID", id);
		const response = await fetch(`${APIURL}players/${id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error("Oops, I couldn't delete that player!");
	}
};
