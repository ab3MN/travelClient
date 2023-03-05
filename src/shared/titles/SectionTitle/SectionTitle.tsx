import React, { FC } from 'react';
import './SectionTitle.scss';

interface ISectionTitileProps {
  text: string;
  style?: any;
}

const SectionTitle: FC<ISectionTitileProps> = ({ text, style }) => (
  <h4 className="section__title" style={{ ...style }}>
    {text}
  </h4>
);

export default React.memo(SectionTitle, () => true);
