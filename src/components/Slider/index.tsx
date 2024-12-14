"use client";
import React, { useEffect } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselImages } from '../../data'; 
import Image from 'next/image';

const Slider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fadeInStyle = {
    animation: 'fade-in 4s ease-in forwards',
  };

  useEffect(() => {
    const fadeInKeyframes = `
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;

    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(fadeInKeyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div className="w-full slick-carousel bg-gray-900">
      <SlickSlider {...sliderSettings}>
        {carouselImages?.map((image) => (
          <div key={image.id} className="slick-slide relative h-full">
            <div className="md:h-80 lg:h-[500px] w-full overflow-hidden relative">
              <Image
                src={image.src}
                alt={`Slide ${image.id}`}
                fill 
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 md:p-8 lg:p-12 transition-opacity duration-300 ease-in-out z-10'>
              <h1 style={fadeInStyle} className='text-white text-xl md:text-2xl lg:text-3xl font-lalezar text-center'>
                Brutal Simplicity of Thought. <br />
                Borrow up to
                <span className='text-[#FF5733] font-bold'> 200000</span>
              </h1>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;