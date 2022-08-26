import React from "react";

// styles
import classes from "./EventContent.module.scss";

// types
type Props = {
  children: React.ReactNode;
};

const EventContent: React.FC<Props> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
