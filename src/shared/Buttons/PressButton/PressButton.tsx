import React, { FC } from 'react';
import './PressButton.scss';

interface IPressButtonProps {
  name: string;
  style?: any;
}

const PressButton: FC<IPressButtonProps> = ({ name, style }) => {
  return (
    <button className="press__button" style={{ ...style }}>
      {name}
    </button>
  );
};

export default PressButton;
