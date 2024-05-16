import React, { useEffect } from 'react';
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';

const Carousel = ({ items }) => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
          direction: "horizontal",
          grabCursor: true,
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          spaceBetween: 10,
          mousewheel: {
            forceToAxis: true
          },
          breakpoints: {
            767: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1699: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
          speed: 700,
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
          
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);
  return (
    <div className="section">
      <div className="container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {items.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="people__card">
                  <img
                    src={item.imageSrc}
                    className="people__card__image"
                    alt={item.title}
                  />
                  <div className="people__card__content">
                    <div className="slide__number">{item.number}</div>
                    <div className="slide__title">{item.title}</div>
                    <div className="slide__subtitle">{item.subtitle}</div>
                    <a href={item.link} className="slide__btn">
                      <span className="slide__btn__text">Visit Now</span>
                      <span className="slide__btn__icon">
                        {/* SVG Icon */}
                      </span>
                    </a>
                  </div>
                  <div className="slide__gradient"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
