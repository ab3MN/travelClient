import React, { FC } from 'react';
import './ViewButton.scss';

interface IProps {
  text: string;
  style?: any;
}

const ViewButton: FC<IProps> = ({ text, style }) => (
  <button className="view__button" style={style}>
    {text}
  </button>
);

export default ViewButton;
