import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Signup } from "./pages/signup";
import injectContext from "./store/appContext";
import { useContext } from "react";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./pages/login";

import { Context } from "./store/appContext";
import { NavUser } from "./component/navUser";
import ModalTest from "./component/modalTest";
import { Users } from "./pages/Users";
//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{store.pathName == "/login" || store.pathName == "/signup" ? <NavUser /> : <Navbar />}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/users" component={Users} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/modalTest" component={ModalTest} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
