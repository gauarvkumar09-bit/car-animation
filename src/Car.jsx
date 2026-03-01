import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import car from './assets/car.png';


gsap.registerPlugin(ScrollTrigger);

const Car = () => {
  const component = useRef(null);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
          markers: false
        }
      });

      tl.to(".box", { x: "80vw", duration: 10 });

      tl.to(".doha1, .doha2, .doha3, .doha4", {
        opacity: 1,
        stagger: 1,
        duration: 1
      }, 2); 

    }, component); 

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={component}>
      <div className="container top">
        <div className="doha1" style={{ opacity: 0 }}>
          <span className="span">100%</span> aj kare so kal kare
        </div>
        <div className="doha2" style={{ opacity: 0 }}>
          <span className="span">100%</span> kal kare to parso
        </div>
      </div>

      <div className="main">
        <div className="text">
          <div>WELCOME</div>
          <div>TO</div>
          <div>ITSFIzz</div>
        </div>

        <div className="box">
          <div className="road"></div>
          <div className="car-wrap">
            <img src={car} alt="car" />
          </div>
        </div>
      </div>

      <div className="container bottom">
        <div className="doha3" style={{ opacity: 0 }}>
          <span className="span">100%</span> itni jaldi kya hai bando
        </div>
        <div className="doha4" style={{ opacity: 0 }}>
          <span className="span">100%</span> jab jina hai barso
        </div>
      </div>
    </div>
  );
};

export default Car;