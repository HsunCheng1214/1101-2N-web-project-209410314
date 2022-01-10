import React from 'react';
import Navbar_14 from '../demo/navbar/Navbar_14';
import Grocery_14 from '../demo/grocery/Grocery_14';
import { links, social } from './nav_data';

const ClassDemoPage_14 = () => {
  return (
    <>
      <Navbar_14  links={links} social={[]} />
      <Grocery_14 />
    </>
  );
};

export default ClassDemoPage_14;
