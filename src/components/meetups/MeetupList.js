import React from "react";
import Meetupitem from "./Meetupitem";
import css from "./Meetuplist.module.css";
import Cards from "../ui/cards";
const MeetupList = (props) => {
   return (
      <Cards>
         <ul className={css.list}>
            {props.meetups.map((meetup) => (
               <Meetupitem
                  key={meetup.id}
                  id={meetup.id}
                  title={meetup.title}
                  image={meetup.image}
                  address={meetup.address}
                  description={meetup.description}
               />
            ))}
         </ul>
      </Cards>
   );
};

export default MeetupList;
