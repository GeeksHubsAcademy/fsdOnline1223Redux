import "./Detail.css";

import { useSelector } from "react-redux";
import { detailData } from "../../app/slices/detailSlice";
import { useEffect } from "react";

export const Detail = () => {
  //Instancio RDX en modo lectura
  const rdxDetailData = useSelector(detailData);

  useEffect(() => {
    console.log(rdxDetailData, "soy la reduxdetaildata....");
  }, [rdxDetailData]);

  return <div className="detailDesign">{rdxDetailData.details.name}</div>;
};
