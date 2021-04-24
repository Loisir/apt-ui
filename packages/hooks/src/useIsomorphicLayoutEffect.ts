import React from 'react';
import { canUseDOM } from '@apt-ui/utils';

export const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect;