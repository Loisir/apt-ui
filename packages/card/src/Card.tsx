import React from "react";
import { CardProps } from "./Card.types";

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
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