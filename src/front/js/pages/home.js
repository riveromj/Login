import React from "react";
import "../../styles/home.scss";
import logo from "../../img/logo.png";

export const Home = () => {
	return (
		<>
			<div className="home text-center mt-5">
				<img src={logo} className="App-logo" alt="logo" />

				<h1 className="text">Welcome Login - Signup witch React</h1>
			</div>
		</>
	);
};
