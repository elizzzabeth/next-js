import React from "react";
import Image from "next/image";

// components
import { LogisticsItem } from "../index";
import { AddressIcon, DateIcon } from "src/components/icons";

// styles
import classes from "./EventLogistics.module.scss";

// types
type Props = {
  date?: string;
  address?: string;
  image?: string;
  imageAlt?: string;
};

const EventLogistics: React.FC<Props> = ({ date, address, image, imageAlt }) => {
  const humanReadableDate =
    date &&
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  const addressText = address?.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
