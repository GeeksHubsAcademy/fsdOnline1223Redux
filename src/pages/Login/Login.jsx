
import { useState } from "react"
import { CInput } from "../../common/CInput/CInput"
import "./Login.css"
import { CButton } from "../../common/CButton/CButton"

export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {

        setCredentials((prevState) => ({
            ...prevState,
            [e.target.value] : e.target.name
        }))
    }

    const loginMe = () => {
        console.log("a")
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