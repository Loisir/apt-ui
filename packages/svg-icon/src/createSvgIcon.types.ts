import React from 'react';

export interface CreateSvgIconOptions {
  /**
   * The `svg` path or group element
   */
  path: React.ReactElement | React.ReactElement[];

  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
};