import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getFilteredEvents } from "dummy-data";

// components
import EventList from "src/components/events/EventsList";
import ResultsTitle from "src/components/events/ResultsTitle";
import { Button, ErrorAlert } from "src/components/ui";

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = +filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <React.Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button url="/events">Show all events</Button>
        </div>
      </React.Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <React.Fragment>
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
      <h1>Filtered Events page</h1>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </React.Fragment>
  );
};

export default FilteredEventsPage;
