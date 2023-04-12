const cohortName = "2301-ftb-et-web-am";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
	try {
		const response = await fetch(`${APIURL}/api/players`);
		const result = await response.json();
		//render players to page
		return result.data.players;
	} catch (error) {
		console.error("Oops, I couldn't fetch the players!", error);
	}
};

export const fetchSinglePlayer = async (playerId) => {
	try {
		const response = await fetch(`${APIURL}/api/players/${playerId}`);
		const singlePlayer = await response.json();
		console.log("Single Player: ", singlePlayer);
	} catch (error) {
		console.error("Oops, I couldn't fetch the single player!");
	}
};

export const addNewPlayer = async (playerObj) => {
	try {
		const response = await fetch(`${APIURL}/api/players`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(playerObj),
		});
		const singlePlayerFromServer = await response.json();
		console.log(singlePlayerFromServer);
		return singlePlayerFromServer;
	} catch (error) {
		console.error("Oops, I couldn't add that player!");
	}
};

export const removePlayer = async (playerId) => {
	try {
		const response = await fetch(`${APIURL}/api/players${playerId}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		});
		const deletedPlayer = await response.json();
		console.log(deletedPlayer);
		return deletedPlayer;
	} catch (error) {
		console.error("Oops, I couldn't delete that player!");
	}
};
