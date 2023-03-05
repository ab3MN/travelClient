import React from 'react';
import { useLocation } from 'react-router-dom';
import Listing from '../../components/Listing/Listing';

const DestinationPage = () => {
  const location = useLocation().search.replace('?location_name=', '');

  return <Listing location={location} />;
};

export default DestinationPage;
