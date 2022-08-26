import React from "react";
import Link from "next/link";

// styles
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  url?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, url, onClick }) => {
  if (url) {
    return (
      <Link href={url}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
