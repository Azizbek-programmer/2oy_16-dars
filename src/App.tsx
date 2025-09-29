import { memo } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Collections from './components/collection';
import Category from './components/creators';

const App = () => {
  return (
    <div className='bg-[#2B2B2B]'>
      <Header/>
      <Hero/>
      <Collections/>
      <Category/>
    </div>
  );
};

export default memo(App);