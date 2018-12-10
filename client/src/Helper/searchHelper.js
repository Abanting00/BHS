export const search = (searchField, arr, trait) => {
	 	let results = arr.filter(x => {
	 		return x[trait].toLowerCase().includes(searchField)
	 	});
	 	
	 	return results;
	}