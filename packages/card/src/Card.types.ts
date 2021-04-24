import React from 'react';

export default interface CardProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  
  /**
   * If `true` edges be rounded.
   * @default true
   */
  rounded: boolean;
};