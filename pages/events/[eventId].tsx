import React from "react";
import type { NextPage } from "next";
import { getEventById, getFeaturedEvents } from "src/helpers/apiUtil";

// components
import { EventSummary, EventLogistics, EventContent } from "src/components/eventDetail";

// types
import { EventItemPropsTypes } from "src/types/EventsPropsTypes";

export type SelectedEventPropsTypes = {
  selectedEvent: EventItemPropsTypes;
};

const EventDetailPage: NextPage<SelectedEventPropsTypes> = ({ selectedEvent }: SelectedEventPropsTypes) => {
  if (!selectedEvent) {
    return (
      <div className="center">
        <p>No event found</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <EventSummary title={selectedEvent?.title} />
      <EventLogistics
        date={selectedEvent?.date}
        address={selectedEvent?.location}
        image={selectedEvent?.image}
        imageAlt={selectedEvent?.title}
      />
      <EventContent>
        <p>{selectedEvent?.description}</p>
      </EventContent>
    </React.Fragment>
  );
};

export async function getStaticProps(context: { params: { eventId: number } }) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: { selectedEvent: event },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true
  };
}

export default EventDetailPage;
