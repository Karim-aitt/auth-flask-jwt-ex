
import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Login() {
const {store, actions} = useContext(Context)

    return (
        <>
        {store.auth == true ? // borrar / modificar 
            <div className="text-center">
                <h1>Hola {store.nombre}</h1>
                <h2>Esto es una página que solo se muestra si estas Logueado</h2>
                <Link to="/private" className="btn btn-secondary" onClick={() => {
                    actions.private()
                    // console.log(store.token)
                    }}>Otra página personal</Link>
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