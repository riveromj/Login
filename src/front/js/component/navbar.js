import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Login/Signup</span>
			</Link>
			<div className="ml-auto">
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
