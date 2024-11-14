import "./sidebar.scss"
import Links from "./links/Links"
import Togglebutton from "./togglebutton/Togglebutton"
import { useState } from "react"
import { motion } from "framer-motion"

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)", //circle with bigger radius as these variants are being used in the bg div and the bg div has max width 400px so circle will over flow into a rectangle if bg width is bgger than circle , then our circle will be a bigger circle and will not overflow
        transition:{
            type: "spring",
            stiffness: 20,
        
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>

        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>

        <Togglebutton setOpen={setOpen}/>

    </motion.div>
  )
}

export default Sidebar