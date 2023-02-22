import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Product } from "./repository/product";
import "./App.css";
import CardInfo from "./components/CardInfo";

const ImagesCarousel = React.lazy(() => import("./components/ImagesCarousel"));
const CardDescription = React.lazy(() => import("./components/CardDescription"));

const App = ({ url }) => {
   const [data, setData] = useState({});
   const [cardState, setCardState] = useState({
      hover: false,
      showDesc: false,
   });

   useEffect(() => {
      getdata();
   }, [cardState.hover]);

   const getdata = async () => {
      const data = new Product(url);
      const response = await data.getProducCard();
      setData(response);
   };

   const showDescription = useCallback(() => {
      setCardState((prev) => ({ ...prev, showDesc: !prev.showDesc }));
   }, [cardState.showDesc]);

   const showCarousel = useCallback(
      (param) => {
         setCardState((prev) => ({ ...prev, hover: param }));
      },
      [cardState.hover]
   );

   return (
      <div className="App">
         {!!Object.keys(data).length ? (
            <div className="product-card">
               {!cardState?.hover ? (
                  <div
                     onMouseEnter={() => showCarousel(true)}
                     onMouseLeave={() => showCarousel(false)}
                     className="image-container"
                  >
                     <img src={data?.pic[0]} alt="Placeholder" />
                     <h1 className="ribbon">Folded Ribbon</h1>
                  </div>
               ) : (
                  <ImagesCarousel pics={data?.pic} />
               )}

               <div className="mainContent">
                  <CardInfo data={data} />
                  <div className="mainContent-description">
                     <h2 onClick={showDescription}>See description</h2>
                     {cardState?.showDesc && (
                        <Suspense fallback="loading">
                           <CardDescription text={data.description} />
                        </Suspense>
                     )}
                  </div>
               </div>
            </div>
         ) : (
            <h1>skeleton</h1>
         )}
      </div>
   );
};

export default App;
