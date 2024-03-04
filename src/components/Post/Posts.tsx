import { FC } from 'react';
import { PostItem } from './PostItem/PostItem';

const Posts: FC = (): JSX.Element => {
  return (
    <div className='posts'>
      <PostItem
        title='JavaScript'
        id={1}
        buttonText=' Delete'
        body='JavaScript is programming language'
      />
    </div>
  );
};

export { Posts };
