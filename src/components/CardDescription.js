import React from "react";
import { filterPhoneNumber } from "../utils/function";
import "../App.css";

const Description = ({ text }) => {
   return (
      <div>
         <p className="desc-detail">{filterPhoneNumber(text)}</p>
      </div>
   );
};

export default Description;
