import React from 'react';

export default interface CreateSvgIconOptions {
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
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
