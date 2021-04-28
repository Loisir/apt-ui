import { createSvgIcon } from '@apt-ui/svg-icon';

export const ArrowLeftIcon = createSvgIcon({
  path: (
    <g>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </g>
  ),
  displayName: 'ArrowLeft'
});