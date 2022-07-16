import { MouseEvent } from 'react';

import { IconType } from 'components/Icon';

interface ButtonProps {
  caption: string;
  onClick: (event: MouseEvent) => void;
  icon?: IconType,
}

export type {
  ButtonProps,
}
