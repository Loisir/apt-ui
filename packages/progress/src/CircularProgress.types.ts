import React from 'react';

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  thickness: number;
};