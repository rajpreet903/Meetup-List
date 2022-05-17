import React from "react";
import css from "./Meetupitems.module.css";
import Cards from "../ui/cards";
import { useContext } from "react";
import { FavouritesContext } from "../../store/favourites-conext";

const Meetupitem = (props) => {
   const favouriteCtx = useContext(FavouritesContext);
   const itemisfavourite = favouriteCtx.itemisfavourite(props.id);
   const toggleFavouriteStatusHandler = () => {
      if (itemisfavourite) {
         favouriteCtx.removeFavourite(props.id);
      } else {
         favouriteCtx.addFavourite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
         });
      }
   };
   return (
      <Cards>
         <li className={css.item}>
            <div className={css.image}>
               <img src={props.image} alt={props.title}></img>
            </div>
            <div className={css.content}>
               <h3>{props.title}</h3>
               <address>{props.address}</address>
               <p>{props.description}</p>
            </div>
            <div className={css.actions}>
               <button onClick={toggleFavouriteStatusHandler}>
                  {itemisfavourite ? "Remove From Favourite" : "To Favourite"}
               </button>
            </div>
         </li>
      </Cards>
   );
};

export default Meetupitem;
