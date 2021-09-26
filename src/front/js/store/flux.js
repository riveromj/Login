const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
		},
		actions: {
			///get user
			getUser: () => {
				//const token = localStorage.getItem("token");
				fetch(process.env.BACKEND_URL + "/api/users", {
					method: "GET"
					//headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())
					.then(data => {
						setStore({ users: data });
					});
			}
		}
	};
};

export default getState;
