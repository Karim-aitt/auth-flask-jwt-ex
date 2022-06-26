import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom"

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")


	return (
		<>
		{store.auth == true ? <Navigate to="/privates"/> : //borrar

			<div className="text-center mt-5">
				<input className="mx-2" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"></input>
				<input className="mx-2" onChange={(e) => setPass(e.target.value)} type="password" placeholder="password"></input>
				<button className="btn btn-secondary mx-2" onClick={() => {
						if(email == "" || pass == ""){
							alert("Rellene los campos vacios")
						} else {
							actions.signup(email, pass)
							
						}
					}
				}
					>Signup</button>

				<button className="btn btn-primary" onClick={() => {
						if(email == "" || pass == ""){
							alert("Rellene los campos vacios")
						} else {
							actions.login(email, pass)
						}
					}
					
				}
					>Login</button>

			</div>
		}
		</>
	);
};
