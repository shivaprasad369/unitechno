"use client";
import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import { motion } from "framer-motion"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <motion.div viewport={{once:true}} initial={{opacity:0,scale:0.5,y:-50}} whileInView={{opacity:1,scale:1,y:0,transition:{type:'tween',ease:'easeInOut',duration:1}}} className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </motion.div>
          <div className='brand-content grid-6 py'>
            {brand.map((item,i) => (
              <motion.div viewport={{once:true}} initial={{opacity:0,scale:0.5}} whileInView={{scale:1,opacity:1,transition:{type:'spring',delay:0.3*i,ease:'easeIn'}}} className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
