import { FC } from 'react';
import cl from './common/styles/main.module.scss';
import { Posts } from './components/Post/Posts';
import { Box } from '@mui/material';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  return (
    <div className={cl.App}>
      <div className={cl.post}>
        <Box component='div' sx={{ p: 1 }}>
          <Posts />
        </Box>
      </div>
    </div>
  );
};

export { App as Application };
