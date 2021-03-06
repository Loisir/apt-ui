import React from 'react';
import { IButtonIconProps, IButtonProps } from './Button.types';

export const Button = React.forwardRef<React.HTMLElement, IButtonProps>((props, ref) => {
  const {
    leftIcon,
    children,
    rightIcon,
  } = props;

  return (
    <div>
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
});