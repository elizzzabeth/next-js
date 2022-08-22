import React from "react";

// components
import EventItem from "src/components/events/EventItem";

// styles
import classes from "./EventList.module.scss";

type Props = {
  items: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  }[];
};

const EventList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
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
