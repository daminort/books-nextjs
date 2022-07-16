import { FC } from 'react';

import { icons } from 'lib/icons';
import { IconProps } from './Icon.props';

const Icon: FC<IconProps> = (props) => {
  const {
    type,
    className = '',
  } = props;

  const IconComponent = icons[type];
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent className={className} />
  );
};

export {
  Icon,
};
