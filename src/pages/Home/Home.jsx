import { useEffect, useState } from "react";
import { bringCharacters } from "../../services/apiCalls";
import "./Home.css";

import { useDispatch } from "react-redux";
import { add_details } from "../../app/slices/detailSlice";

import { useNavigate } from "react-router-dom";

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
              <div onClick={() => goToDetail(character)} key={character.id}>
                {character.name}
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
