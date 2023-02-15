import React from 'react';
import './ViewButton.scss';

const ViewButton = ({ text = '' }) => (
  <button className="view__button">{text}</button>
);

export default ViewButton;
