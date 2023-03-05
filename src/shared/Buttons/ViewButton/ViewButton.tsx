import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './ViewButton.scss';

interface IProps {
  text: string;
  style?: any;
  to?: string;
}

const ViewButton: FC<IProps> = ({ text, style, to = '#' }) => (
  <button className="view__button" style={style}>
    <Link to={to}> {text}</Link>
  </button>
);

export default React.memo(ViewButton, () => true);
