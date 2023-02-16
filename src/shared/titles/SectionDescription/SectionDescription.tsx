import React, { FC } from 'react';
import './SectionDescription.scss';

interface IProps {
  text: string;
  style?: any;
}

const SectionDescription: FC<IProps> = ({ text, style }) => (
  <h3 className="section__description" style={{ ...style }}>
    {text}
  </h3>
);

export default SectionDescription;
