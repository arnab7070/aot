"use client";
import React, { useState, useEffect } from "react";
import { Pacifico } from "next/font/google";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Footer from "../components/footer";
import Swiper from "swiper";
import 'swiper/swiper-bundle.css';
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
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

  const [scrollPosition, setScrollPosition] = useState(2);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function parallax() {
    return {
      transform: `translateY(-${scrollPosition * 0.0315}rem)`,
    };
  }

  function titleStyle() {
    return {
      transform: `translateY(${6}rem)`,
    };
  }

  return (
    <>
      <section className="hero" style={parallax()}>
        <video
          aria-describedby="hero-video-description"
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          poster="https://www.jhu.edu/assets/uploads/2024/02/homepage_loop_102_v2-Original-960x540.jpg"
          muted="muted"
          type="video/mp4"
          src="https://www.jhu.edu/assets/uploads/2024/04/2024-04_homepage_loop_103_-_final-Original.mp4"
        ></video>

        <h1 style={titleStyle()} className="text-center lg:text-left">
          <Typewriter
            options={{
              strings: [
                "Welcome to Academy Of Technology",
                "Where aspirations meet success",
                "Translating visions into reality",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </section>
      <section className="content">
        <div className="jhu-block brand-message section brand" role="region">
          <div className="dot-matrix" aria-hidden="true"></div>
          <div className="center force">
            <div className="">
              <h2 className="relative top-12 ">
                <span
                  className={`${pacifico.className} block text-white text-4xl md:text-8xl ml-2 mr-auto md:ml-6 md:mr-auto`}
                >
                  When vision
                </span>
                <br />
                <span
                  className={`${pacifico.className} block text-white text-4xl md:text-8xl ml-8 mr-auto md:ml-56`}
                >
                  meets guidance,
                </span>
                <br />
                <strong className="">
                  <span className="block text-4xl md:text-8xl ml-40 mr-auto md:ml-[50rem] md:mr-auto">
                    <h1 className="close">anything</h1>
                  </span>
                  <br />
                  <span className="block text-4xl md:text-8xl ml-20 mr-auto md:ml-96 md:mr-auto">
                    <h1 className="close">is possible.</h1>
                  </span>
                </strong>
              </h2>

              {/* <p>
                At Johns Hopkins, you can explore ideas that interest you, find
                people who inspire and challenge you, and make discoveries that
                change your life—and the world.
              </p> */}
            </div>
          </div>
        </div>
        <div className=" ">
        
          <div class="section">
            <div class="container">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="people__card">
                      <img
                        src="https://i.imgur.com/gIxOPCD.jpg"
                        class="people__card__image"
                      />
                      <div class="people__card__content">
                        <div class="slide__number">01</div>
                        <div class="slide__title">G.I. Joe: Retaliation</div>
                        <div class="slide__subtitle">
                          The G.I. Joes are not only fighting their mortal enemy
                          Cobra; they are forced to contend with threats from
                          within the government that jeopardize their very
                          existence.
                        </div>
                        <a href="" class="slide__btn">
                          <span class="slide__btn__text">Watch Now</span>
                          <span class="slide__btn__icon">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 17 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div class="slide__gradient"></div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="people__card">
                      <img
                        src="https://i.imgur.com/2V1lJy4.jpg"
                        class="people__card__image"
                      />
                      <div class="people__card__content">
                        <div class="slide__number">02</div>
                        <div class="slide__title">Red Notice</div>
                        <div class="slide__subtitle">
                          An Interpol agent successfully tracks down the world's
                          most wanted art thief with help from a rival thief.
                          But nothing is as it seems as a series of
                          double-crosses ensues.
                        </div>
                        <a href="" class="slide__btn">
                          <span class="slide__btn__text">Watch Now</span>
                          <span class="slide__btn__icon">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 17 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div class="slide__gradient"></div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="people__card">
                      <img
                        src="https://i.imgur.com/3tlt7BS.jpg"
                        class="people__card__image"
                      />
                      <div class="people__card__content">
                        <div class="slide__number">03</div>
                        <div class="slide__title">Battleship</div>
                        <div class="slide__subtitle">
                          A fleet of ships is forced to do battle with an armada
                          of unknown origins in order to discover and thwart
                          their destructive goals.
                        </div>
                        <a href="" class="slide__btn">
                          <span class="slide__btn__text">Watch Now</span>
                          <span class="slide__btn__icon">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 17 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div class="slide__gradient"></div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="people__card">
                      <img
                        src="https://i.imgur.com/2Y4s19s.jpg"
                        class="people__card__image"
                      />
                      <div class="people__card__content">
                        <div class="slide__number">04</div>
                        <div class="slide__title">London Has Fallen</div>
                        <div class="slide__subtitle">
                          In London for the Prime Minister's funeral, Mike
                          Banning is caught up in a plot to assassinate all the
                          attending world leaders.
                        </div>
                        <a href="" class="slide__btn">
                          <span class="slide__btn__text">Watch Now</span>
                          <span class="slide__btn__icon">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 17 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                      <div class="slide__gradient"></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <img
          src="https://www.jhu.edu/assets/themes/machado/assets/images/textures/footer-texture-blue-ad4fe94a5e.svg"
          className="w-full"
        />
      </section>
    </>
  );
};

export default Hero;
