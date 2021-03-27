const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			home: [],

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
				console.log(`${store.baseURL}${value}`);
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
			}
		}
	};
};

export default getState;
