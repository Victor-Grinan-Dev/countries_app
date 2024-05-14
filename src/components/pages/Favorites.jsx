// import React, { Children } from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

// import DraggingBoard from '../UIs/DraggingBoard';
// import FavCard from "../UIs/FavCard";

import World from "../UIs/World";

function Favorites() {
  // const countries = useSelector((state) => state.countries.countries);
  const favCountries = useSelector(
    (state) => state.countries.favoriteCountries
  );
  const isLoading = useSelector((state) => state.countries.isLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div
      className="page"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h2 style={{ color: "white" }}>Favorites</h2>
      <World favListCodes={favCountries} />
    </div>
  );
}

export default Favorites;
