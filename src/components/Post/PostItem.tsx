import { FC } from 'react';
import cl from '../../common/styles/main.module.scss';
import CookieIcon from '@mui/icons-material/Cookie';

interface PostItemProps {
  
}

const PostItem: FC<PostItemProps> = (): JSX.Element => {
  return (
    <div className={cl.post__itemContent}>
      <div className={cl.post__content}>
        <CookieIcon style={{ color: '#313239', fontSize: '30px' }} />
        <strong className={cl.post__title}>1. JavaScript</strong>
        <div className={cl.post__body}>JavaScript is programming language</div>
      </div>
      <div className={cl.post__buttons}>
        <button type='button' className={cl.post__button}>
          Delete
        </button>
      </div>
    </div>
  );
};

export { PostItem };
