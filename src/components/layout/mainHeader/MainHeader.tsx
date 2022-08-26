import React from "react";
import Link from "next/link";

// styles
import classes from "./MainHeader.module.scss";

const MainHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
