import React from 'react';
import { CreateSvgIconOptions } from './createSvgIcon.types';
import { SvgIcon } from './SvgIcon';
import { SvgIconProps } from './SvgIcon.types';

export const createSvgIcon = (options: CreateSvgIconOptions) => {
  const {
    path,
    displayName
  } = options;
  
  const Component = (props: SvgIconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
    return (
      <SvgIcon ref={ref} {...props}>
        {path} 
      </SvgIcon>
    );
  };

  Component.displayName = displayName;

  return React.memo(React.forwardRef(Component));
};