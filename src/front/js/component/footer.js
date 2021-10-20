import React from "react";

export const Footer = () => (
	<nav className="navbar fixed-bottom navbar-dark bg-dark text-center text-white">
		<div className="container p-4 pb-0">
			<section className="mb-4 text-center">
				{/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
			<i className="fab fa-facebook-f" />
		</a> */}

				{/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
			<i className="fab fa-twitter" />
		</a> */}

				{/* <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
			<i className="fab fa-google" />
		</a> */}
				{/* 
		<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
			<i className="fab fa-instagram" />
		</a> */}

				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://www.linkedin.com/in/riveromj"
					role="button">
					<i className="fab fa-linkedin-in" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="https://github.com/riveromj" role="button">
					<i className="fab fa-github" />
				</a>
			</section>
			<div className="text-center p-3">© 2021 Copyright: @riveromj</div>
		</div>
	</nav>
);
