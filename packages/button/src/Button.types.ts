import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement> {
  /**
   * Whether or not the button in loading state.
   * If `true` will show a spinner.
   * @default false
   */
  isLoading?: boolean;

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  isDisabled?: boolean;
  
  /**
   * Icon before the button's label.
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon after the button's label.
   */
  rightIcon?: React.ReactNode;

  /**
   * HTML button type to use.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit';
};