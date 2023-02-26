import React, { FC } from 'react';
import s from './Modal.module.scss';
import allowScroll from '../../helpers/allowScroll';
import blockScroll from '../../helpers/blockScroll';

interface IProps {
  children: React.ReactNode | any;
  onClose: () => void | any;
  style?: any;
  dropStyle?: any;
}

const Modal: FC<IProps> = ({
  children,
  onClose,
  style = {},
  dropStyle = {},
}) => {
  const backdropRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) =>
      e.code !== 'Escape' ? undefined : onClose();

    window.addEventListener('keydown', handleKeyPress);
    blockScroll();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      allowScroll();
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    backdropRef.current && e.target !== backdropRef.current
      ? undefined
      : onClose();

  return (
    <div
      className={s.modal__backrop}
      onClick={handleBackdropClick}
      ref={backdropRef as React.RefObject<HTMLDivElement>}
      style={dropStyle}
    >
      <div className={s.modal} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
