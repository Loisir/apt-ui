import React from 'react';
import { SwitchBaseProps } from '@apt-ui/switch-base';

export interface RadioProps
  extends SwitchBaseProps {
  checkedIcon: React.ReactNode;
  uncheckedIcon: React.ReactNode;
};