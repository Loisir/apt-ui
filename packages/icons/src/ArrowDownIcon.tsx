import { createSvgIcon } from '@apt-ui/svg-icon';

export const ArrowDownIcon = createSvgIcon({
  path: (
    <g>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </g>
  ),
  displayName: 'ArrowDown'
});