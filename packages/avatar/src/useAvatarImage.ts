import React from 'react';

type Status = 'loading' | 'pending' | 'failed' | 'loaded';

export const useAvatarImage = (src: string, srcSet: string) => {
  const [loaded, setLoaded] = React.useState<Status>('pending');

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded('loading');

    let active = true;
    const image = new Image();
    image.src = src;
    if (srcSet) {
      srcSet;
    }
    image.onload = () => {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('failed');
    };

    return () => {
      active = false;
    };
  }, [src, srcSet]);

  return loaded;
};