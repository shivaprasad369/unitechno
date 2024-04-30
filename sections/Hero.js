"use client"
import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import { motion } from "framer-motion";
import React from "react";

// import bg from '../images/earth.png'
const Hero = () => {
  return (
    <>
      <section className="hero relative">
        <img
          src={"../images/earth.png"}
          alt=""
          width={20}
          id="test"
          className="rotating border-[1rem] rounded-full w-[20rem] absolute transition"
        />
        <div className="container">
          {/* <img src={'../images/stars.png'} alt="" className="stars"/> */}

          <TitleLogo title="Unitechno" className="logobg" />
          <motion.h1
            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 ,scale:0.5}}
            whileInView={{
              x: 0,
              opacity: 1,
              scale:1,
              transition: { type: "tween", ease: "easeInOut", duration: 1 },
            }}
            className="hero-title max-md:text-2xl"
          >
            WE BUILD DIGITAL EXPERIENCES
          </motion.h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" delay={1} /> <span>.</span>
            <TitleSm title="BRANDING" delay={1.6}/> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" delay={2.3} />
          </div>
        </div>
      </section>
      <section className="hero-sec ">
        <div className="container">
          <motion.div viewport={{once:true}} initial={{opacity:0,y:-100}} whileInView={{opacity:2,y:0,transition:{duration:1,type:'tween',ease:'easeIn'}}} className="heading-title">
            <Title title="The last digital agency you ll ever need" />
            <p>
              Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
              dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
              ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut
              magna porttitor scelerisque.
            </p>
          </motion.div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <motion.div 
              viewport={{once:true}}
      initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:0.3*i,type:'spring'}}}
              className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard /> */}
    </>
  );
};

export default Hero;
