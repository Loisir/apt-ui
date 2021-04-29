import { createSvgIcon } from '@apt-ui/svg-icon';

export const MaximizeIcon = createSvgIcon({
  path: (
    <g>
      <polyline points="15 3 21 3 21 9"/>
      <polyline points="9 21 3 21 3 15"/>
      <line x1="14" y1="10" x2="21" y2="3"/>
      <line x1="3" y1="21" x2="10" y2="14"/>
    </g>
  ),
  displayName: 'Maximize'
});