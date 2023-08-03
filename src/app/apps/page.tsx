"use client"
import Image from 'next/image';
import logo from '../../../assest/12.jpg'
import logo1 from '../../../assest/22.jpeg'
import logo2 from '../../../assest/man-doing-dance-moves-side-view-removebg-preview.png'

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

export default function Carousel() {
  return (
    <div>
    <Swiper className='mt-40 flex justify-center gap-2 bg-white'
    spaceBetween={1}
    slidesPerView={2}
    autoplay={{
      delay: 10000, // 20 seconds delay between slides
      disableOnInteraction: false, // continue autoplay even when user interacts with slides
    }}
  >
    
      <SwiperSlide >
        <Image
          src={'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG'}
          alt="logo1"
          width={250}
          height={300}
          
          
        />
         <h1>Sweater</h1>
        <p>$130</p>
        
      </SwiperSlide>
     
        
        
      <SwiperSlide>
        <Image src={logo1}
        alt='logo'
        width={250}
        height={300}
        />
         <h1>Sweater</h1>
        <p>$130</p>
        

      </SwiperSlide>
     
      
      <SwiperSlide>
        <Image
        src={logo2}
        alt='logo5'
        width={250}
        height={300}
        
        />
         <h1>Sweater</h1>
        <p>$130</p>
      </SwiperSlide>


     
      </Swiper>
   

    </div>
  );
};