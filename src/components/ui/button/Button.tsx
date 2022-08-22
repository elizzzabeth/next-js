import React from "react";
import Link from "next/link";

// styles
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  url: string;
};

const Button: React.FC<Props> = ({ children, url }) => {
  return (
    <Link href={url}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default Button;
