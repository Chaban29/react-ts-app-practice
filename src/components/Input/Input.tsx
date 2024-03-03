import { FC } from 'react';
import { useState } from 'react';
import cl from '../../common/styles/main.module.scss';

interface InputProps {}

const Input: FC<InputProps> = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={cl.input__item}>
      <input
        type='text'
        name='input'
        id=''
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h4>{value}</h4>
    </div>
  );
};

export { Input };
