const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			home: [],
			details: [],
			favorites: [],

			baseURL: "https://www.swapi.tech/api/"
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/", {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ home: Object.entries(data.result) });
					});
			},
			getAllData: value => {
				const store = getStore();
				fetch(`${store.baseURL}${value}`, {
					method: "GET",

					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ [value]: data.results || data.result });
						//console.log(store.home);
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getAllDetails: (value, id) => {
				const store = getStore();
				fetch(`${store.baseURL}${value}/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ details: data.results || data.result });
						//	console.log("dataresult ", Object.keys(details));
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			setFavorites: name => {
				const store = getStore();

				store.favorites.includes(name)
					? setStore({ favorites: store.favorites })
					: setStore({ favorites: store.favorites.concat(name) });
				console.log(store.favorites);
			},

			deleteFavorites: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
			}
		}
	};
};
export default getState;
