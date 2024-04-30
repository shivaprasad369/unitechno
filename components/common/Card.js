import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
import { motion } from "framer-motion"

export const Card = ({ data, caption, show, path,delay }) => {
  return (
    <>
      <motion.div 
      viewport={{once:true}}
      initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1,transition:{delay:0.3*delay,type:'spring',ease:'easeIn'}}}
      className='card'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href={`${path}/${data.id}`} className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {/* {caption && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )} */}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </>
  )
}
