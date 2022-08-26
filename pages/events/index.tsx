import React from "react";
import type { NextPage } from "next";
import { getAllEvents } from "dummy-data";
import { useRouter } from "next/router";

// components
import EventList from "src/components/events/EventsList";
import EventsSearch from "src/components/events/EventsSearch";

const EventsPage: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string | undefined, month: string | undefined) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <React.Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </React.Fragment>
  );
};

export default EventsPage;
