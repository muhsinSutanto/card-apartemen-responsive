import React from "react";
import icon from "../assets/icons/flat.png";

const CardInfo = ({ data }) => {
   return (
      <div className="mainContent-info">
         <div className="mainContent-left">
            <div className="mainContent-left-top">
               <div className="logo-container">
                  <img src={icon} loading="lazy" />
               </div>
               <div>
                  <h1>{data.title}</h1>
                  <p>{data.address}</p>
               </div>
            </div>
            <div class="mainContent-left-bottom">
               <div className="mainContent-text-group">
                  <p>{data.project_type} </p>
                  <p> . </p>
                  <p>{data.year}</p>
                  <p> . </p>
                  <p> {data.ownership_type}</p>
               </div>
               <p>{data.availabilities_label}</p>
            </div>
         </div>
         <div className="mainContent-right">
            <h2>{data.price}</h2>
            <p>{data.subprice_label}</p>
         </div>
      </div>
   );
};

export default CardInfo;
