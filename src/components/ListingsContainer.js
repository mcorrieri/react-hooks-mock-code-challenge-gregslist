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

  // function handleDeleteListing(id) {
  //   const updatedListingArray = listings.filter((listing) => listing.id !== id);
  //   setListings(updatedListingArray);
  // }
  // fetch(`http://localhost:6001/listings/${id}`, {
  //   method: "DELETE",
  // })
  //   .then((r) => r.json())
  //   .then(() => {
  //     onDeleteListing(id);
  //   });

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              listing={listing}
              onDeleteListing={handleDeleteListing}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
