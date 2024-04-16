import { Routes, Route } from "react-router-dom"
import { Login } from "../Login/Login"
import { Home } from "../Home/Home"
import { Detail } from "../Detail/Detail"


export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    )
}