import React from 'react';

export interface BreadcrumbItemProps {
  
};

export interface BreadcrumbProps {
  /**
   * Custom separator node.
   * @default '/'
   */
  separator?: React.ReactNode;
  
  children?:
    React.ReactElement<BreadcrumbItemProps> |
    React.ReactElement<BreadcrumbItemProps>[];
};