import { FC, ChangeEvent } from 'react';

import { InputProps } from './Input.props';
import s from './Input.module.css';

const Input: FC<InputProps> = (props) => {
  const {
    value,
    onChange,
    className = '',
    placeholder = '',
  } = props;

  const onChangeLocal = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeLocal}
      className={`${s.input} ${className}`}
      placeholder={placeholder}
    />
  );
};

export {
  Input,
};
