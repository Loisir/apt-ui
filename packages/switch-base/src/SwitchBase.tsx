import React from 'react';
import { SwitchBaseProps } from './SwitchBase.types';

export const SwitchBase = React.forwardRef<HTMLElement, SwitchBaseProps>((props, ref) => {
  const {
    autoFocus,
    checked,
    checkedIcon,
    defaultIcon,
    defaultChecked,
    disabled,
    inputProps,
    inputRef,
    required,
    tabIndex,
    type,
    value,
    onFocus,
    onBlur,
    onClick,
    ...otherProps
  } = props;

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };
  
  return (
    <span
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={ref}
      {...otherProps}
    >
      <input
        autoFocus={autoFocus}
        checked={checked}
        tabIndex={tabIndex}
        type={type}
        ref={inputRef}
        value={value}
        {...inputProps}
      >
        {checked ? checkedIcon : defaultChecked}
      </input>
    </span>
  );
});

SwitchBase.displayName = 'SwitchBase';