import React from 'react';
import CreateSvgIconOptions from './createSvgIcon.types';
import SvgIcon from './SvgIcon';
import SvgIconProps from './SvgIcon.types';

const createSvgIcon = ((options: CreateSvgIconOptions) => {
  const {
    viewBox = '0 0 24 24',
    path,
    displayName
  } = options;
  
  const Component = (props: SvgIconProps, ref) => {
    return (
      <SvgIcon ref={ref} viewBox={viewBox} {...props}>
        {path} 
      </SvgIcon>
    );
  }

  Component.displayName = displayName;

  return React.memo(React.forwardRef(Component));
});

export default createSvgIcon;