import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		name: "",
		surname: "",
		email: "",
		password: "",
		cpassword: ""
	});
	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (user.password != user.cpassword) {
			console.log("contraseña no coinciden");
			alert("The passwords must be the same");
		} else {
			console.log("registrar al usuario");
			actions.registerUser(user);
			setUser({
				name: "",
				surname: "",
				email: "",
				password: "",
				cpassword: ""
			});
		}
		//hacer un condicional

		//actions.registerUser(user, props, setError, setSpinner);
	};

	return (
		<div className="container">
			<h1 className="text-align-center">Sign UP</h1>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<div className="form-group row">
					<label htmlFor="inputName3" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputName3"
							value={user.name}
							name="name"
							placeholder="Name"
						/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="inputSurName3" className="col-sm-2 col-form-label">
						Surname
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputSurName3"
							value={user.surname}
							name="surname"
							placeholder="Surname"
						/>
					</div>
				</div>
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
					<label htmlFor="inputConfirmPassword3" className="col-sm-2 col-form-label">
						Confirm password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputConfirmPassword3"
							value={user.cpassword}
							name="cpassword"
							placeholder="Confirm Password"
						/>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
