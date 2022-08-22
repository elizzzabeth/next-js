import React from "react";
import type { NextPage } from "next";
import { getFeaturedEvents } from "dummy-data";

// components
import EventList from "src/components/events/EventsList";

const EventsPage: NextPage = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events</h1>
      <EventList items={featureEvents} />
    </div>
  );
};

export default EventsPage;
