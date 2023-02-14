import { ReactElement, FC } from "react";

interface IList {
  items: any[]; //TODO
  item: ReactElement;
}

export const List: FC<IList> = ({ items, item }) => (
  <ul>
    {items.map(() => (
      <li>{item}</li>
    ))}
  </ul>
);
