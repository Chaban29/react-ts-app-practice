import { FC } from 'react';
import { useState } from 'react';
import cl from '../../common/styles/main.module.scss';

interface CounterProps {}

const Counter: FC<CounterProps> = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const Increment = (): void => {
    setCount((prev: number) => prev + 1);
  };

  const Decrement = (): void => {
    if (count < 1) return;

    setCount((prev: number) => prev - 1);
  };
  return (
    <div className={cl.counter__item}>
      <h3>{count}</h3>
      <button type='button' onClick={Increment}>
        Increment
      </button>
      <button type='button' onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};

export { Counter };
