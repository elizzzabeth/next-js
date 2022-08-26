import React from "react";

// styles
import classes from "./LogisticsItem.module.scss";

// types
type Props = {
  children: React.ReactNode;
  icon: () => JSX.Element;
};

const LogisticsItem: React.FC<Props> = ({ children, icon }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon()}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
