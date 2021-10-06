import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

const Login = props => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.login(user, props);
	};
	useEffect(() => {
		actions.setPathName("/login");
	}, []);

	return (
		<div className="container">
			<h1 className="text-align-center">Login</h1>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div className="form-group row">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="inputEmail3"
							value={user.email}
							name="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputPassword3"
							value={user.password}
							name="password"
							placeholder="Password"
						/>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
Login.propTypes = {
	props: PropTypes.any
};
export default Login;
