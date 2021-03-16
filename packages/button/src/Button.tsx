import React from 'react';
import { ButtonProps } from './Button.types';


export const Button = React.forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {
    children,
    leftIcon,
    rightIcon,
    ...otherProps
  } = props;

  return (
    <div ref={ref} {...otherProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
});