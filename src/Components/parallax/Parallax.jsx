import "./parallax.scss"
import {useRef} from 'react'
import {motion, useScroll, useTransform} from "framer-motion"


const Parallax = ({type}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });    

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); //animation speed can be controlled from here
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); //needs to be as 500%

  return (
    <div 
        className="parallax"
        ref={ref}
        style={{
            background:
                type === "services" 
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)", 
        }}    
    >

        <motion.h1 style={{y: yText}}>
            {type === "services" ? "What I do?" : "What I did?"}
        </motion.h1>

        <motion.div className="mountains"></motion.div>

        <motion.div 
            className="planets" 
            style={{ y: yBg,
                backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
                }}>
        </motion.div>

        <motion.div style={{x: yBg}} className="stars"></motion.div>

    </div>
  )
}

export default Parallax