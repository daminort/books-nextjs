import { ArrowLeft } from './ArrowLeft';
import { ChevronsLeft } from './ChevronsLeft';

const icons = {
  arrowLeft: ArrowLeft,
  chevronsLeft: ChevronsLeft,
}

type IconType = keyof typeof icons;

export type { IconType };
export {
  icons,
};
