import React from 'react';
import { CircularProgressProps } from './CircularProgress.types';

const RADIUS = 20;

export const CircularProgress = React.forwardRef<HTMLSpanElement, CircularProgressProps>((props, ref) => {
  const {
    thickness = 3,
    value = 0,
    ...otherProps
  } = props;
  
  return (
    <span
      role="progressbar"
      ref={ref}
      {...otherProps}
    >
      <svg
        viewBox={`${RADIUS} ${RADIUS} ${RADIUS * 2} ${RADIUS * 2}`}
      >
        <circle
          cx={RADIUS * 2}
          cy={RADIUS * 2}
          r={RADIUS - thickness}
          strokeWidth={thickness}
          fill="none"
        />
      </svg>
    </span>
  );
});

CircularProgress.displayName = 'CircularProgress';