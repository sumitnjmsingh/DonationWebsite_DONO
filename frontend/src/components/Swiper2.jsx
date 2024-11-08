import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Donate_card from "./Donate_card.jsx"
import Card from "./Card.jsx"
import { patients } from './Image.js';


import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay,Grid} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay,Grid]}
        className="mySwiper"
      >

        {  patients
                        
                          .map((img)=>{
                                 return(
                                      <div  key={img.index}>
                                            <SwiperSlide > <Donate_card  img={img.img} purpose={img.purpose} organiser={img.organiser}  /></SwiperSlide>
                                       </div>
                                  )
                          })
                           
                         }
      </Swiper>
    </>
  );
}
