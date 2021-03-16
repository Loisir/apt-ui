import React from "react";
import { CardProps } from "./Card.types";

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <div></div>
  );
});

Card.displayName = 'Card';

export default Card;