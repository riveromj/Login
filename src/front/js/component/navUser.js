import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import "../../styles/navUser.scss";
import { useHistory } from "react-router-dom";

export const NavUser = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	console.log(store.user, "$$$$$");

	const handleLogout = () => {
		localStorage.removeItem("token");
		actions.setPathName("/");
		history.push("/");
	};
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Login/Signup</span>
			</Link>
			<div className="ml-auto m-2">
				<Link to="/">
					<button className="btn  btn-color" onClick={handleLogout}>
						Log uot
					</button>
				</Link>
			</div>
			<div className="text-user">
				<span>{store.user}</span>
			</div>
		</nav>
	);
};
