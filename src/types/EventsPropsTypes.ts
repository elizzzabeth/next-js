export type EventItemPropsTypes = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

export type EventListPropsTypes = {
  events: EventItemPropsTypes[];
};
