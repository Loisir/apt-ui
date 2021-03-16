import React from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const {
    children,
    separator = "/",
    ...otherProps
  } = props;
  
  return (
    <nav
      ref={ref}
      {...otherProps}
    >
      {children}
    </nav>
  )
})