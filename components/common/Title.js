import { motion } from "framer-motion";

export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  );
};

export const TitleSm = ({ title,delay}) => {
  return (
    <motion.h1
      viewport={{ once: true }}
      initial={{ y: -10, opacity: 0 }}
      whileHover={{
        y:-20,transition:{
          duration:0.3,
          type: "spring",
          ease: "easeInOut"
        }
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay:0.3,
          type: "spring",
          duration: 1,
          ease: "easeInOut"
        },
      }}
      className="titleSm "
    >
      {title}
    </motion.h1>
  );
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};
