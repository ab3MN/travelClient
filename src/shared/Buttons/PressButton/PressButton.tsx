import React, { FC } from 'react';
import './PressButton.scss';

interface IPressButtonProps {
  name: string;
  style?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const PressButton: FC<IPressButtonProps> = ({ name, style, type }) => {
  return (
    <button className="press__button" style={{ ...style }} type={type}>
      {name}
    </button>
  );
};

export default PressButton;
