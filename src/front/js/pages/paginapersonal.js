import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"


function PaginaPersonal(){
const {store, actions} = useContext(Context)

    return (
        <>
            {store.token != null && store.auth == true? 
                <div className="text-center"> 
                    <h1>Página personal que ha realizado la autentificacion jwt_require</h1>
                    {/* <Link className="btn btn-primary" to="/privates">Home</Link> */}
                </div>
            : <Navigate to="/privates"/>
            }
        </>
    )
}

export {PaginaPersonal}