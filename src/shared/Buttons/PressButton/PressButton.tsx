import React, { FC } from 'react';
import './PressButton.scss';

interface IPressButtonProps {
  name: string;
  style?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  checkRender?: number;
}

const PressButton: FC<IPressButtonProps> = ({
  name,
  style,
  type,
  onClick,
  checkRender,
}) => {
  return (
    <button
      className="press__button"
      style={{ ...style }}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default React.memo(PressButton, (next, prev) => {
  if (next.checkRender !== prev.checkRender) {
    return false;
  }
  return true;
});
