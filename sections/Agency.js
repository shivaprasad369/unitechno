"use client";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import { motion } from "framer-motion";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 1,
              transition: { duration: 1, type: "spring", ease: "easeInOut" },
            }}
            className="heading-title"
          >
            <TitleSm title="ABOUT UNITECHNO" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </motion.div>

          <div className="content flex1">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: -50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  ease: "easeIn",
                },
              }}
              className="left w-60 py"
            >
              <TitleSm title="Turning your business ideas into smart digital products since 2018" />
              <p className="desc-p">
                Unitechno is one of the professional Software Development
                companies in Hubli, services provided by Unitechno are majorly
                Website Designing, Mobile App Designing, UI/UX Design, Graphic
                Designing, Digital Marketing, Web Development, and App
                Development. Specialized in service providing such as attractive
                and responsive website creation, social media integration,
                payment integration, inventive design posts for social media
                accounts, logo designing, business cards, business catalogs and
                brochures, advertisement posters and videos for all social media
                accounts. We believe in result-oriented performance, our team is
                expertise in strategic mix of professionals from technology,
                consulting, business management and client servicing domains.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  ease: "easeIn",
                  delay: 0.3,
                },
              }}
              className="right w-40 ml"
            >
              <img
                src="/images/logo.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="95%"
              />
            </motion.div>
          </div>

          <div className="content flex">
            <motion.div
             viewport={{ once: true }}
             initial={{ opacity: 0, scale: 0.5, y: -50 }}
             whileInView={{
               opacity: 1,
               scale: 1,
               y: 1,
               transition: { duration: 1, type: "spring", ease: "easeInOut" },
             }}
            className="left w-40 py">
              <img
                src="/images/logo.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </motion.div>
            <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 1,
                ease: "easeIn",
                delay: 0.3,
              },
            }}
            className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Specialized in service providing such as attractive and
                responsive website creation, social media integration, payment
                integration, inventive design posts for social media accounts,
                logo designing, business cards, business catalogs and brochures,
                advertisement posters and videos for all social media accounts.
                We believe in result-oriented performance, our team is expertise
                in strategic mix of professionals from technology, consulting,
                business management and client servicing domains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
