import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ text = '' }) => (
  <h4 className="section__title">{text}</h4>
);

export default SectionTitle;
