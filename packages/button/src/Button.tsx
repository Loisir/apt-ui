import React from 'react';
import { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    isDisabled = false,
    isLoading = false,
    children,
    leftIcon,
    rightIcon,
    type = 'button',
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      type={type}
      {...otherProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;