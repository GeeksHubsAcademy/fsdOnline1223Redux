import "./Header.css";

import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../app/slices/userSlice";
import { useEffect } from "react";
import { CNavigator } from "../CNavigator/CNavigator";

export const Header = () => {
  //Instancio Redux en modo lectura
  const rdxUserData = useSelector(userData);

  //Instancio Redux en modo escritura
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(rdxUserData, "soy redux el slice de user");
  }, [rdxUserData]);

  return (
    <div className="headerDesign">
      {rdxUserData.credentials?.token ? (
        <>
          {rdxUserData.credentials.user.roleName === "super_admin" && (
            <CNavigator title={"Super Admin"} path="/admin" />
          )}
          <CNavigator
            title={rdxUserData.credentials.user.name}
            path="/profile"
          />
          <div onClick={() => dispatch(logout({ credentials: "" }))}>
            <CNavigator title={"logout"} path="/" />
          </div>
        </>
      ) : (
        <>
          <CNavigator title={"login"} path="/login" />
        </>
      )}
    </div>
  );
};
