import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { FavouritesContext } from "../../store/favourites-conext";

const MainNavigation = () => {
   const favouriteCxt = useContext(FavouritesContext);

   return (
      <header className={classes.header}>
         <div className={classes.logo}>
            React Meetups
            <nav>
               <ul>
                  <li>
                     <Link to="/">All Meetups</Link>
                  </li>
                  <li>
                     <Link to="/new-meet">Add Meetups</Link>
                  </li>
                  <li>
                     <Link to="/favourites">
                        Favourites <span className={classes.badge}>{favouriteCxt.totalFavourties}</span>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default MainNavigation;
