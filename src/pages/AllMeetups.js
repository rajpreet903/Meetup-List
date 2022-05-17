import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetups = () => {
   const [isloading, setIsloading] = useState(true);
   const [loadedMeetups, setLoadedMeetups] = useState([]);

   useEffect(() => {
      setIsloading(true);
      fetch("https://meetup-683bb-default-rtdb.firebaseio.com/meetups.json")
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            const meetups = [];
            for (const key in data) {
               const meetup = {
                  id: key,
                  ...data[key],
               };
               meetups.push(meetup);
            }
            setIsloading(false);
            setLoadedMeetups(meetups);
         });
   }, []);

   if (isloading) {
      return (
         <section>
            <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: "2rem" }}>
               Loading...
            </p>
         </section>
      );
   }
   return (
      <section>
         <h1>All Meetups</h1>
         <MeetupList meetups={loadedMeetups} />
      </section>
   );
};

export default AllMeetups;
