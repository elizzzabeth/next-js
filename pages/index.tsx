import React from "react";
import type { NextPage } from "next";
import { getFeaturedEvents } from "src/helpers/apiUtil";

// components
import EventList from "src/components/events/EventsList";

// types
import { EventListPropsTypes } from "src/types/EventsPropsTypes";

const HomePage: NextPage<EventListPropsTypes> = ({ events }: EventListPropsTypes) => {
  return (
    <div>
      <h1>Home page</h1>
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { events: featuredEvents },
    revalidate: 1800
  };
}

export default HomePage;
