const url = process.env.BACKEND_URL;
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			user: [],
			pathName: "/"
		},
		actions: {
			setPathName: path => {
				setStore({ pathName: path });
			},
			///get user
			getUser: () => {
				//const token = localStorage.getItem("token");
				fetch(url + "/api/users", {
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
				fetch(url + "/api/register/user", {
					method: "POST",
					body: JSON.stringify(new_user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (res.status == 409) {
							console.log(res, "regitro de usuario");
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
						//props.history.push("/");
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			login: (user, props, setMessageError, setSpinner) => {
				fetch(url + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						console.log(res.status, "Status loagin");
						if (res.status == 404) {
							//alert("error");
							setMessageError("User not exist");
							setSpinner(false);
							/* setError({ msg: "User not exist", status: true });
							setSpinner(false); */
						}
						if (res.status == 401) {
							/* setError({ msg: "Invalid username or password", status: true });
							setSpinner(false); */
							setSpinner(false);
						}
						if (res.status == 500) {
							/* setError({ msg: "try again later", status: true });
							setSpinner(false); */
							setSpinner(false);
						}
						return res.json();
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						sessionStorage.setItem("user", data.user);
						setStore({ pathName: "/login" });
						props.history.push("/");
					})
					.catch(error => {
						console.log(error, "ESTOY EN CATCH");
						/* setError({ msg: "serve error try later", status: true });
						setSpinner(false); */
					});
			}
		}
	};
};

export default getState;
