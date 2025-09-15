// import React, { Children } from "react";
// import { useState } from "react";
// import { useSelector } from "react-redux";
import World from "../UIs/World";

function Favorites() {

  // const favCountries = useSelector(
  //   (state) => state.countries.favoriteCountries
  // );

  return (
    <div
      className="page"
      style={{ display: "flex", alignItems: "center", flexDirection: "column", backgroundColor:'#030303dc', minHeight: '100vh', maxHeight: '250%' }}
    >
      <h2 style={{ color: "white" }}>Favorites</h2>
      <World />
      
    </div>
  );
}

export default Favorites;
