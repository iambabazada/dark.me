import React from 'react';

const Portfolio = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mx-auto p-[29px] md:px-[0px] px-[26px]'>
      <div className='w-full h-auto '>
        <img src="/portfolio1.png" className='w-full h-full ' alt="Portfolio Item 1" />
      </div>
      <div className='w-full h-auto '>
        <img src="/portfolio2.png" className='w-full h-full ' alt="Portfolio Item 2" />
      </div>
      <div className='w-full h-auto '>
        <img src="/portfolio3.png" className='w-full h-full ' alt="Portfolio Item 3" />
      </div>
    </div>
  );
}

export default Portfolio;
