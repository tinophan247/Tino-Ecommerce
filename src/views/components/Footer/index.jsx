import React from 'react';
import FooterCard from '../FooterCard';
import { FooterData } from '../../../constant';

const Footer = () => {
  return (
    <div className='bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200 flex justify-center '>
      <div className='w-4/5 py-9 flex justify-center'>
        <div className='grid grid-cols-4 gap-32 text-black'>
          {FooterData.map((item, index) => {
            return (
              <FooterCard title1={item.title1} title2={item.title2} key={index}>
                {item.icon}
              </FooterCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
