// import React, { useState } from "react";

// const SearchBar = () => {
// 	const [searchInput, setSearchInput] = useState("");
// 	const dogList = [`${APIURL}/players`];
// 	const handleChange = (e) => {
// 		e.preventDefault();
// 		setSearchInput(e.target.value);
// 	};

// 	if (searchInput.length > 0) {
// 		dogList.filter((dog) => {
// 			return dog.name.match(searchInput);
// 		});
// 	}

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				placeholder="Search here"
// 				onChange={handleChange}
// 				value={searchInput}
// 			/>
// 		</div>
// 	);
// };

// export default SearchBar;
