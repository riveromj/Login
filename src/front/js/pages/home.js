import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text-center mt-5">
				<h1>Usuarios Registrados</h1>
				{store.users.map((user, i) => {
					return <div key={i}>{user.email}</div>;
				})}
			</div>
			<div className="row" d-flex mt-2>
				<div className="col-2 mx-auto" />
				<div className="col-2 mx-auto" />
			</div>
		</>
	);
};
