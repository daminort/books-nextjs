import { FC } from 'react';

type Props = {
  name: string,
  onClick: () => void,
};

const Input: FC<Props> = ({ onClick, name }) => {

  return (
    <div onClick={onClick}>
      {name}
    </div>
  );
};

export { 
  Input,
};
