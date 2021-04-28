import { createSvgIcon } from '@apt-ui/svg-icon';

export const ArrowRightIcon = createSvgIcon({
  path: (
    <g>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </g>
  ),
  displayName: 'ArrowRight'
});