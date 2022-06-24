
import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom"

function Login() {
const {store, actions} = useContext(Context)

    return (
        <>
        {store.auth == true ?
            <div className="text-center">
                <h1>Hola {store.nombre}</h1>
                <h2>Esto es una página que solo se muestra si estas Logueado</h2>
                {/* <button onClick={actions.logout}>Logout</button> */}
            </div>
            : 
            <>
            <h1>Hi</h1>
            {alert("Esta página es privada")}
            <Navigate to="/"/>
            </>
            

        }   
        </>
        
    )
}

export {Login}