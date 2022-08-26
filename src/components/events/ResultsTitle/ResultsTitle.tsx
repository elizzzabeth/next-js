import React from "react";

// components
import { Button } from "src/components/ui";

// styles
import classes from "./ResultsTitle.module.scss";

type Props = {
  date: Date;
};

const ResultsTitle: React.FC<Props> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button url="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
