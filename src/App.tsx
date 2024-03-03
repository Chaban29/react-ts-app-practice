import { FC } from 'react';
import cl from './common/styles/main.module.scss';
import { Posts } from './components/Post/Posts';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  return (
    <div className={cl.App}>
      <div className={cl.post}>
        <Posts />
      </div>
    </div>
  );
};

export { App };
