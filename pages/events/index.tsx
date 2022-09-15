import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { getAllEvents } from "src/helpers/apiUtil";
import { useRouter } from "next/router";

// components
import EventList from "src/components/events/EventsList";
import EventsSearch from "src/components/events/EventsSearch";

// types
import { EventListPropsTypes } from "src/types/EventsPropsTypes";

const EventsPage: NextPage<EventListPropsTypes> = ({ events }: EventListPropsTypes) => {
  const router = useRouter();

  const findEventsHandler = (year: string | undefined, month: string | undefined) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <React.Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Events..." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: { events: events },
    revalidate: 60
  };
}

export default EventsPage;
