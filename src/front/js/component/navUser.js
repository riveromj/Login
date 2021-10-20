import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import "../../styles/navUser.scss";

export const NavUser = () => {
	const { store, actions } = useContext(Context);
	console.log(store, "$$$$$");
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Login/Signup</span>
			</Link>
			<div className="ml-auto">
				<span>{store.user}</span>
			</div>
		</nav>
	);
};
