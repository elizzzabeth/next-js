import React from "react";

// components
import EventItem from "src/components/events/EventItem";

// styles
import classes from "./EventList.module.scss";

// types
import { EventListPropsTypes } from "src/types/EventsPropsTypes"

const EventList: React.FC<EventListPropsTypes> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
};

export default EventList;
