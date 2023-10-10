'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link'
import {slides} from '../../data/homeSlider'


export default function HomeSlider() {

  const settings = {
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: "80px",
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
  };

  return (
      <Slider {...settings} className="mt-10">   
        {slides.map((slide) => {
          return (
            <Link href="" key={slide.id} className="mainCategory boxShadow relative">
              <Image src={slide.bgImage} alt={slide.title} width={2560} height={1440} className="rounded"/>
              <Image src={slide.logo} alt={slide.title} className="absolute top-10 pl-3" width={900} height={600}/>
              <h4 className="absolute bottom-20 pl-3">{slide.text}</h4>
            </Link>
          )
        })
      }
      </Slider>
  )
}