import React from "react";

// styles
import classes from "./ErrorAlert.module.scss";

type Props = {
  children: React.ReactNode;
};

const ErrorAlert: React.FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
