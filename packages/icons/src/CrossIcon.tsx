import { createSvgIcon } from '@apt-ui/svg-icon';

export const CrossIcon = createSvgIcon({
  path: (
    <g>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="5" y1="19" x2="19" y2="5" />
    </g>
  ),
  displayName: 'Cross'
});