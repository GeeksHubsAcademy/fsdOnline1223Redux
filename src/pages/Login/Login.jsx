
import { useState } from "react"
import { CInput } from "../../common/CInput/CInput"
import { CButton } from "../../common/CButton/CButton"
import { loginBack } from "../../services/apiCalls"
import { decodeToken } from "react-jwt"
import "./Login.css"

import { useDispatch, useSelector } from "react-redux"
import { login, userData } from "../../app/slices/userSlice"

export const Login = () => {

    //Conexion a Redux en modo lectura
    const rdxUserData = useSelector(userData)

    //Conexion a Redux en modo escritura
    const dispatch = useDispatch()


    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {

        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const loginMe = async () => {

        try {
            const fetched = await loginBack(credentials)
            const decodificado = decodeToken(fetched.token)

            const passport = {
                token : fetched.token,
                user : decodificado
            }

            //...este passport es lo que nos interesa guardar en RDX
            dispatch(login({credentials: passport}))

            

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="loginDesign">
            <CInput 
                type={"email"}
                name={"email"}
                className={"basic"}
                value={credentials.email || ""}
                onChange={inputHandler}   
            />
            <CInput 
                type={"password"}
                name={"password"}
                className={"basic"}
                value={credentials.password || ""}
                onChange={inputHandler}   
            />
            <CButton 
                title={"Login me"}
                clickFunction={loginMe}
            />
        </div>
    )
}