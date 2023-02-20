import React from 'react';
import SectionDescription from '../../../../shared/titles/SectionDescription/SectionDescription';
import SectionTitle from '../../../../shared/titles/SectionTitle/SectionTitle';

const AboutLeft = () => {
  return (
    <div>
      <SectionTitle
        text="About Us"
        style={{ padding: '140px 0px 15px 20px', textAlign: 'left' }}
      />
      <SectionDescription
        text="Never Be Alone"
        style={{ textAlign: 'left', paddingLeft: '20px' }}
      />
      <div>
        <img src="./img/about/img.png" alt="" />
      </div>
    </div>
  );
};

export default AboutLeft;
