import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Usuarios Registrados</h1>
			{store.users.map((user, i) => {
				return <div key={i}>{user.email}</div>;
			})}
		</div>
	);
};
