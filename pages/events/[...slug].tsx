import React, { useEffect, useState } from "react";
import useSWR from "swr";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

// components
import EventList from "src/components/events/EventsList";
import ResultsTitle from "src/components/events/ResultsTitle";
import { Button, ErrorAlert } from "src/components/ui";

// types
import { EventItemPropsTypes } from "src/types/EventsPropsTypes";

const FilteredEventsPage: NextPage = () => {
  const [loadedEvents, setLoadedEvents] = useState<EventItemPropsTypes[]>();
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR(
    "https://events-4862b-default-rtdb.europe-west1.firebasedatabase.app/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered events</title>
      <meta name="description" content={"A list of filtered events"} />
    </Head>
  );

  if (!loadedEvents) {
    return (
      <React.Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </React.Fragment>
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filteredYear = filterData[0];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const filteredMonth = +filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  pageHeadData = (
    <Head>
      <title>Filtered events</title>
      <meta name="description" content={`All events for ${numMonth}/${numYear}`} />
    </Head>
  );

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
    return (
      <React.Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button url="/events">Show all events</Button>
        </div>
      </React.Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p className="center">No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button url="/events">Show all events</Button>
        </div>
      </React.Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <React.Fragment>
      {pageHeadData}
      <h1>Filtered Events page</h1>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </React.Fragment>
  );
};

export default FilteredEventsPage;
