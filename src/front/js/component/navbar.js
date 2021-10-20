import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store, "$$$$$");
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Login/Signup</span>
			</Link>
			<div className="ml-auto m-2">
				<span>{store.user}</span>
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
			<div>
				<Link to="/signup">
					<button type="button" className="btn btn-primary">
						Signup
					</button>
				</Link>
			</div>
		</nav>
	);
};
