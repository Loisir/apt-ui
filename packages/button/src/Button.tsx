import React from 'react';
import { IButtonProps } from './Button.types';
import styled from 'styled-components';

export const StyledButton = styled.div`

`;

export const Button = React.forwardRef<HTMLDivElement, IButtonProps>((props, ref) => {
  const {
    leftIcon,
    children,
    rightIcon,
  } = props;

  return (
    <div
    ref={ref}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </div>
  );
});