import { createContext, useState } from "react";

export const FavouritesContext = createContext({
   favourites: [],
   totalFavourties: 0,
   addFavourite: (favouriteMeetup) => {},
   removeFavourite: (meetupId) => {},
   itemisfavourite: (meetupId) => {},
});

export const FavouriteContextProvider = (props) => {
   const [userFavourites, setUserFavourites] = useState([]);

   const addFavouriteHandler = (favouriteMeetup) => {
      setUserFavourites((prevUserFavourites) => {
         return prevUserFavourites.concat(favouriteMeetup);
      });
   };
   const removeFavouriteHandler = (meetupId) => {
      setUserFavourites((prevUserFavourites) => {
         return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
      });
   };
   const itemIsFavouriteHandler = (meetupID) => {
      return userFavourites.some((meetup) => meetupID === meetup.id);
   };
   const context = {
      favourites: userFavourites,
      totalFavourties: userFavourites.length,
      addFavourite: addFavouriteHandler,
      removeFavourite: removeFavouriteHandler,
      itemisfavourite: itemIsFavouriteHandler,
   };
   return <FavouritesContext.Provider value={context}>{props.children}</FavouritesContext.Provider>;
};
