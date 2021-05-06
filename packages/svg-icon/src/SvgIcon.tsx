import React from 'react';
import { SvgIconProps } from './SvgIcon.types';

export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  const {
    children,
    viewBox = '0 0 24 24',
    htmlColor,
    ...otherProps
  } = props;
  
  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      color={htmlColor}
      {...otherProps}
    >
      {children}
    </svg>
  );
});

SvgIcon.displayName = 'SvgIcon';