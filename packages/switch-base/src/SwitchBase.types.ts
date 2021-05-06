import React from 'react';

export interface SwitchBaseProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  autoFocus?: boolean;
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  defaultIcon?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<any>;
  required?: boolean;
  tabIndex?: number;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
};