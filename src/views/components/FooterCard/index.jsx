import React from 'react';

const FooterCard = ({children, title1, title2}) => {
  return (
    <div className='flex items-center justify-center bg-white h-28 w-52 text-black grid-cols-2 gap-2'>
      {children}
      <div className='flex flex-col text-left pl-2'>
        <h2 className='uppercase font-bold text-xs'>{title1}</h2>
        <h3 className='text-xs opacity-70'>{title2}</h3>
      </div>
    </div>
  );
};

export default FooterCard;
