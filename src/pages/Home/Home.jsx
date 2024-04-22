import { useEffect, useState } from "react";
import { bringCharacters } from "../../services/apiCalls";
import "./Home.css";

import { useDispatch } from "react-redux";
import { add_details } from "../../app/slices/detailSlice";

import { useNavigate } from "react-router-dom";
import { add_cart } from "../../app/slices/cartSlice";

export const Home = () => {
  //Instancio RDX en modo escritura

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const bringData = async () => {
      const fetched = await bringCharacters();
      setCharacters(fetched.results);
    };

    if (characters.length === 0) {
      bringData();
    }
  }, [characters]);

  const goToDetail = (character) => {
    //1...guardo en RDX
    dispatch(add_details({ details: character }));

    //2...navego a details
    navigate("/detail");
  };

  return (
    <div className="homeDesign">
      {characters.length > 0 ? (
        <div>
          {characters.map((character) => {
            return (
              <div className="designCharacter" key={character.id}>
                <div onClick={() => goToDetail(character)}>
                  {character.name}
                </div>{" "}
                <div
                  className="plusDesign"
                  onClick={() => dispatch(add_cart(character))}
                >
                  +
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Los datos están viniendo</div>
      )}
    </div>
  );
};
