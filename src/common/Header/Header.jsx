import "./Header.css"

import { useSelector } from "react-redux"
import { userData } from "../../app/slices/userSlice"
import { useEffect } from "react"

export const Header = () => {

    //Instancio Redux en modo lectura
    const rdxUserData = useSelector(userData)

    useEffect(()=>{
        console.log(rdxUserData, "soy redux el slice de user")
    }, [rdxUserData])

    return (
        <div className="headerDesign">
            {rdxUserData.credentials?.token 
            
            ? (<>{rdxUserData.credentials.user.name}</>)

            : (<>no logeado</>)
            
            }

        </div>
    )
}