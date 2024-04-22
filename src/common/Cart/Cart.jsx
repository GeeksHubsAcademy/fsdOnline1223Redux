import "./Cart.css";
import { useSelector } from "react-redux";
import { cartData } from "../../app/slices/cartSlice";
import cart from "../../assets/cart.png"
import { useEffect } from "react";

export const Cart = () => {

    //Instanciamos los datos del carrito desde Redux...

    const rdxCartData = useSelector(cartData)

    useEffect(()=> {
        console.log(rdxCartData, "soy yo....")
    }, [rdxCartData])

    return (
        <>
            <div><img className="basketDesign" src={cart} alt="carro"/></div>
            <div className="cartDataShow">{rdxCartData?.basket?.length}</div>
        </>
    )
}