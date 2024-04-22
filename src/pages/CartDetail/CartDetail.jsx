import "./CartDetail.css";
import { useSelector } from "react-redux";
import { cartData } from "../../app/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { remove_cart } from "../../app/slices/cartSlice";

export const CartDetail = () => {

  //Instanciamos Redux en modo escritura
  const dispatch = useDispatch();

  //Instanciamos Redux en modo lectura
  const rdxCartData = useSelector(cartData);

  useEffect(() => {
    console.log(rdxCartData, "desde el detalle del carrito....");
  }, [rdxCartData]);

  return (
    <div className="cartDetailDesign">
      {rdxCartData.basket.length > 0 ? (
        <>
        {rdxCartData.basket.map((element) => {
            console.log(element)
          return <div key={element.id}>{element.name}</div>;
        })}
        <div className="emptyCartDesign" onClick={()=>dispatch(remove_cart({basket: []}))}>VACIAR EL CARRITO</div>
        </>
      ) : (
        <div>No hay nada en el carrito</div>
      )}
    </div>
  );
};
