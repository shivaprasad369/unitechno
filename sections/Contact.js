"use client";
import { Title, TitleSm } from "@/components/common/Title";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91 63615 65206</h3>
                  <span>Call us: Mon - Sat 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Hubli, Karnataka, India</h3>
                  <span>
                    Nilgiri Garden, Kusugal Rd, behind Royal Enfield Showroom,
                    Keshwapur, Hubballi, Karnataka 580023
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@dream-theme.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@dream-theme.com</h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <Link href="https://www.facebook.com/unitechnocompany/">

                  <BsFacebook size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href={'https://www.instagram.com/unitechno_company/?hl=en'}>
                  <AiFillInstagram size={25} />
                  </Link>
                </li>
                {/* <li className="icon">
                  <AiFillInstagram size={25} />
                </li> */}
                <li className="icon">
                  <Link href={'https://www.linkedin.com/company/unitechno-company/mycompany/'}>
                  <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1,
                ease: "easeIn",
                delay: 0.3,
              },
            }}
            className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>timeframe</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
