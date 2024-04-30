"use client";
import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <motion.section viewport={{once:true}} initial={{scale:0.5,y:50,opacity:0}} whileInView={{scale:1,opacity:1,y:0,transition:{type:'tween',duration:1,type:'easeIn'} }} className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <motion.button whileHover={{scale:1.1,transition:{type:'spring',duration:0.5,ease:'easeIn'}}} className='button-primary'><Link href={'/contact'}>Request a call-back</Link></motion.button>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner
