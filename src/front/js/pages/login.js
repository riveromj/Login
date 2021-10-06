import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

const Login = props => {
	const { store, actions } = useContext(Context);
	const [messageError, setMessageError] = useState("");
	const [spinner, setSpinner] = useState(false);
	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		setSpinner(true);
		actions.login(user, props, setMessageError, setSpinner);
	};

	const changePathName = () => {
		actions.setPathName("/signup");
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
							required
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
							required
						/>
					</div>
				</div>

				{messageError != "" && (
					<div className="alert hidden alert-danger" role="alert" id="error">
						{messageError}
					</div>
				)}
				{spinner == false ? (
					<div className="form-group row">
						<div className="col-sm-10">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
					</div>
				) : (
					<div className="form-group row">
						<button type="submit" className="btn btn-primary">
							<div className="spinner-border" role="status" />
						</button>
					</div>
				)}

				<p className="text-login">
					Dont have an account yet?{" "}
					<Link onClick={changePathName} to="/signup">
						{" "}
						click here
					</Link>
				</p>
			</form>
		</div>
	);
};
Login.propTypes = {
	props: PropTypes.any
};
export default Login;
