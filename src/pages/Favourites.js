import React from "react";
import { useContext } from "react";
import { FavouritesContext } from "../store/favourites-conext";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
   const favouriteCtx = useContext(FavouritesContext);
   let content;
   if (favouriteCtx.totalFavourties === 0) {
      content = <p style={{ fontSize: "1.5rem" }}>You have no Favourite Meetups. Start Adding😉</p>;
   } else {
      content = <MeetupList meetups={favouriteCtx.favourites} />;
   }
   return (
      <section>
         <h1>My Favourites</h1>
         {content}
      </section>
   );
};

export default Favourites;
