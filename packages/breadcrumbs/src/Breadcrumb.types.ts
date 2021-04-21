import React from 'react';

export interface BreadcrumbSeparatorProps
	extends React.HTMLAttributes<HTMLLIElement> {};

export interface BreadcrumbProps
	extends React.HTMLAttributes<HTMLElement> {
  /**
   * Custom separator node.
   * @default '/'
   */
  separator?: React.ReactNode;
};