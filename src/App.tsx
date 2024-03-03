import { FC } from 'react';
import cl from './common/styles/main.module.scss';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  return (
    <div className={cl.App}>
      <div className={cl.post}>
        <div className={cl.post__content}>
          <strong className={cl.post__title}>1. JavaScript</strong>
          <div className={cl.post__body}>
            JavaScript is programming language
          </div>
          </div>
          <div className={cl.post__buttons}>
            <button type='button' className={cl.post__button}>
              Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export { App };
