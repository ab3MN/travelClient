import React from 'react';
import './SectionDescription.scss';

const SectionDescription = ({ text = '' }) => (
  <h3 className="section__description">{text}</h3>
);

export default SectionDescription;
