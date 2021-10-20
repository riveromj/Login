import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { ModalTest } from "../component/modalTest.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	const handleShow = () => {
		setState({ showModal: true });
	};
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
			<div>
				<i
					onClick={() => {
						handleShow();
					}}
					className="far fa-trash-alt trash"
				/>
			</div>
			<ModalTest show={state.showModal} onClose={() => setState({ showModal: false })} />
		</>
	);
};
