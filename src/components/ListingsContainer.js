import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsArray) => {
        console.log(listingsArray);
        setListings(listingsArray);
      });
  }, []);

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
