import React from 'react';
import SectionTitle from '../../../shared/titles/SectionTitle/SectionTitle';
import s from './Deals.module.scss';
import DealsList from './DealsList/DealsList';
import SectionDescription from '../../../shared/titles/SectionDescription/SectionDescription';
import ViewButton from '../../../shared/Buttons/ViewButton/ViewButton';

const deals = [
  {
    imgTitle: 'VIETNAM',
    imgSrc: './img/deals/1/XL.png',
    title: 'Sapa Trekking Tours - 2 Days 1 Night Stay At Homesday',
    text: 'Varius massa maecenas et id dictumst mattis. Donec fringilla ac parturient posuere id phasellus erat elementum nullam lacus cursus rhoncus parturient vitae praesent quisque nasceturmolestie quis',
    duration: '2 days',
    size: '4 people',
    id: '1',
    price: '170,00',
  },
  {
    imgTitle: 'THAILAND',
    imgSrc: './img/deals/2/XL.png',
    title: 'Half-Day Chiang Mail City and Temples Tour Including Doi Suthep',
    text: '  Arius massa maecenas et id dictumst mattis. Donec fringilla ac parturient posuere id phasellus erat elementum nullam lacus cursus rhoncus parturient vitae praesent quisque nascetur molestie quis',
    duration: '6 hours',
    size: '6 people',
    id: '2',
    price: '625,00',
  },
  {
    imgTitle: 'CAMBODIA',
    imgSrc: './img/deals/3/XL.png',
    title: 'Tourism Paradise Island Koh Rong Cambodia 2 Days 1 Night',
    text: ' Arius massa maecenas et id dictumst mattis. Donec fringilla ac parturient posuere id phasellus erat elementum nullam lacus cursus rhoncus parturient vitae praesent quisque nascetur molestie quis',
    duration: '6 hours',
    size: '50 people',
    id: '3',
    price: '320,00',
  },
];

const Deals = () => {
  return (
    <section className={s.deals}>
      <div className="deals__container">
        <SectionTitle text="Flash Deals" />
        <SectionDescription text="We`ve Got Some Great Deals" />
        <DealsList deals={deals} />
        <ViewButton text="view all details" />
      </div>
    </section>
  );
};

export default Deals;
