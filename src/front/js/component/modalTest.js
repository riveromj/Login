import React from "react";
import PropTypes from "prop-types";

export const ModalTest = props => {
	const handleSubmit = () => {
		props.onClose();
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>{`Do you want to delete  `}</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => props.onClose()} type="button" className="btn btn-ohNo">
							Oh no!
						</button>

						<button
							type="button"
							className="btn btn-Doit"
							data-dismiss="modal"
							onClick={() => {
								handleSubmit();
							}}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalTest.propTypes = {
	props: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

ModalTest.defaultProps = {
	show: false,
	onClose: null
};
export default ModalTest;
