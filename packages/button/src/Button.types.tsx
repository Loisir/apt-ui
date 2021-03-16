import React from 'react';

export interface ButtonProps {
  /**
   * Whether or not the button in loading state.
   * If `true` will show a spinner.
   */
  isLoading: boolean;

  /**
   * If `true`, the button will be disabled.
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
};