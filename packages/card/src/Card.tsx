import React from "react";
import CardProps from "./Card.types";

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    rounded = true,
    ...otherProps
  } = props;

  return (
    <div
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;