import React from 'react';

export interface AvatarProps {
  /**
   * Contents of the avatar.
   * Can be an element or a string.
   */
  children?: React.ReactNode;
  
  /**
   * The `alt` attribute for the `img` element.
   */
  alt?: string;

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes?: string;

  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;

  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for resposive avatar image.
   */
  srcSet?: string;

  /**
   * If `true` avatar will have a square shape.
   * @default false
   */
  square?: boolean;
}