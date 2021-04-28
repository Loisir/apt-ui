import React from 'react';
import { AvatarProps } from './Avatar.types';
import useImage from './useImage';

const AvatarImg = (props: AvatarProps) => {
  const {
    alt,
    src,
    srcSet
  } = props;

  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
    />
  );
};

AvatarImg.displayName = 'AvatarImg';

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    alt,
    square = false,
    src,
    srcSet,
    ...otherProps
  } = props;

  let children = null;

  const loaded = useImage(src || '', srcSet || '');
  const hasSrc = src || srcSet;

  if (hasSrc && loaded !== 'failed') {
    children = (
      <AvatarImg
        src={src}
        srcSet={srcSet}
        alt={alt}
      />
    );
  } else if (hasSrc && alt) {
    children = alt[0];
  } else {
    
  }

  return (
    <div
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Avatar.displayName = 'Avatar';