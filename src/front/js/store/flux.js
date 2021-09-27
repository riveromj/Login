const url = process.env.BACKEND_URL;
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
			},
			registerUser: user => {
				const new_user = {
					name: user.name,
					surname: user.surname,
					email: user.email,
					password: user.password
				};
				fetch(process.env.BACKEND_URL + "/api/register/user", {
					method: "POST",
					body: JSON.stringify(new_user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (res.status == 409) {
							/* setError({ msg: "User Name or email exist", status: true });
							setSpinner(false);
							return; */
						}
						if (res.status == 500) {
							/* setError({ msg: "try again later", status: true });
							setSpinner(false);
							return; */
						}
						return res.json();
					})
					.then(data => {
						props.history.push("/");
						console.log(data);
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
