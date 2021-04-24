import React from 'react';

export default interface CreateSvgIconOptions {
  /**
   * The `svg` viewBox prop
   * @default '0 0 24 24'
   */
  viewBox?: string;
  
  /**
   * The `svg` path or group element
   */
  path: React.ReactElement | React.ReactElement[];

  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
}
