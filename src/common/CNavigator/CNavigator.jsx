import "./CNavigator.css";
import { useNavigate } from "react-router-dom";

export const CNavigator = ({ title, path }) => {
  //Instanciamos useNavigate para poder movernos
  const navigate = useNavigate();

  return (
    <div className="navigatorDesign" onClick={() => navigate(path)}>
      {title}
    </div>
  );
};
