import { FC } from 'react';

import { Icon } from 'components/Icon';
import { ButtonProps } from './Button.props';
import s from './Button.module.css';

const Button: FC<ButtonProps> = ({ caption, icon, onClick }) => {

  return (
    <button
      className={s.button}
      onClick={onClick}
    >
      {icon && (
        <span className={s.icon}>
          <Icon type={icon} />
        </span>
      )}
      <span>{caption}</span>
    </button>
  );
};

export {
  Button,
};
