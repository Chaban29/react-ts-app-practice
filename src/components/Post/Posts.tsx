import { FC } from 'react';
import { PostItem } from './PostItem';

const Posts: FC = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PostItem />
    </div>
  );
};

export { Posts };
