import React from 'react';
import { RadioProps } from './Radio.types';
import { SwitchBase } from '@apt-ui/switch-base';

export const Radio = React.forwardRef<HTMLElement, RadioProps>((props, ref) => {
  const {
      
  } = props;
  
  return (
    <SwitchBase

    />
  );
});