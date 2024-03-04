import { FC, MouseEvent } from 'react';
import { PostItemProps } from '../../../interfaces/postInterfaces';
import cl from '../../../common/styles/main.module.scss';
import CookieIcon from '@mui/icons-material/Cookie';

const PostItem: FC<PostItemProps> = ({
  id,
  title,
  body,
  buttonText,
}: PostItemProps): JSX.Element => {
  const handlerDeleteButton = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ): void => {
    console.log(`${event.clientX} ${event.clientY}`);
    console.log('Delete item');
  };
  return (
    <div className={cl.post__itemContent}>
      <div className={cl.post__content}>
        <CookieIcon style={{ color: '#313239', fontSize: '30px' }} />
        <strong className={cl.post__title}>
          {id}. {title}
        </strong>
        <div className={cl.post__body}>{body}</div>
      </div>
      <div className={cl.post__buttons}>
        <button
          onClick={handlerDeleteButton}
          type='button'
          className={cl.post__button}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export { PostItem };
