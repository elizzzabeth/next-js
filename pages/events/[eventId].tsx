import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from "dummy-data";

// components
import { EventSummary, EventLogistics, EventContent } from "src/components/eventDetail";
import { ErrorAlert } from "src/components/ui";

const EventDetailPage: NextPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <React.Fragment>
      <EventSummary title={event?.title} />
      <EventLogistics date={event?.date} address={event?.location} image={event?.image} imageAlt={event?.title} />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </React.Fragment>
  );
};

export default EventDetailPage;
