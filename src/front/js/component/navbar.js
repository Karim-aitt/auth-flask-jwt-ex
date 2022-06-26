import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/privates">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						{store.auth == true ? 
					<button className="btn btn-primary" onClick={actions.logout}>Logout</button>
						:
						<></>
						}
					</Link>
				</div>
			</div>
		</nav>
	);
};
