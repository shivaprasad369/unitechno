"use client";
import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import { delay, motion } from "framer-motion"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <motion.div viewport={{once:true}} initial={{opacity:0,y:-100}} whileInView={{opacity:2,y:0,transition:{duration:1,type:'tween',ease:'easeIn'}}} className='heading-title'>
            <Title title='Our expertise' />
            <p>Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor.</p>
          </motion.div>
          <div className='hero-content grid-4'>
            {expertise.map((item,index) => (
              <Card delay={index} data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
