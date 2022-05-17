import React from "react";
import Cards from "../ui/cards";
import css from "./NewMeetupform.module.css";
import { useRef } from "react";

const NewMeetupForm = (props) => {
   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descriptionInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const meetupData = {
         title: enteredTitle,
         image: enteredImage,
         address: enteredAddress,
         description: enteredDescription,
      };
      props.onAddMeetup(meetupData);
   };
   return (
      <Cards>
         <form className={css.form} onSubmit={submitHandler}>
            <div className={css.control}>
               <label htmlFor="title">Meetup Title</label>
               <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={css.control}>
               <label htmlFor="image">Meetup Image</label>
               <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={css.control}>
               <label htmlFor="address">Address</label>
               <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={css.control}>
               <label htmlFor="description">Meetup Title</label>
               <textarea required id="description" rows="5" ref={descriptionInputRef} />
            </div>
            <div className={css.actions}>
               <button>Add Meetup</button>
            </div>
         </form>
      </Cards>
   );
};

export default NewMeetupForm;
