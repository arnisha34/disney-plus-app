'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {slides} from '../../data/homeSlider'


export default function HomeSlider() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "80px",
    dots: true,
    infinite: true,
    slidesToShow: 1,
  };

  return (
      <Slider {...settings} className="mt-10">   
        {slides.map((slide) => {
          return (
            <div key={slide.id} className="boxShadow relative whiteBorder">
              <Image src={slide.bgImage} alt={slide.title} className="rounded" width={2560} height={1440}/>
              <Image src={slide.logo} alt={slide.title} className="absolute top-10" width={1600} height={900} style={{objectFit: "scale-down", width: "auto", height:"auto"}}/>
              <h4>{slide.text}</h4>
            </div>
          )
        })
      }
      </Slider>
  )
}