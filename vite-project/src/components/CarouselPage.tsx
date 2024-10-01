import { FC } from 'react';
import pagesList1 from '../constant/pagesList1';
import PagesList2 from '../constant/pagesList2';

const CarouselPage: FC = function() {
  return (
    <>
        <div className='flex items-center'>
        {pagesList1.map((page, index) => (
            <div className='w-[444px] h-[306px] flex items-center justify-center bg-[#C7D0D9]'>
                <div key={index} className='w-[348px] h-[194px]'>
                    <img src={page.path} alt={`Page ${index + 1}`} className='object-scale-down' />
                </div>
            </div>
        ))}
        </div>
        <div className='flex items-center'>
            {PagesList2.map((page, index) => (
            <div className='w-[444px] h-[306px] flex items-center justify-center bg-[#C7D0D9]'>
                <div key={index} className='w-[348px] h-[194px]'>
                    <img src={page.path} alt={`Page ${index + 1}`} className='object-scale-down' />
                </div>
            </div>
            ))}
        </div>
    </>
  );
};

export default CarouselPage;
