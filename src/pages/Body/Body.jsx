import { Routes, Route } from "react-router-dom"
import { Login } from "../Login/Login"
import { Home } from "../Home/Home"
import { Detail } from "../Detail/Detail"
import { CartDetail } from "../CartDetail/CartDetail"


export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/basket" element={<CartDetail />} />
        </Routes>
    )
}