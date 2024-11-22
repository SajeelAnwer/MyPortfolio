import './services.scss'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p>
                {/* write this line then to get to a new line <br /> and add more you want on the new line*/}
                Lets Innovate together
            </p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer">
            <div className="title">
                {/*<img src="/people.webp" alt="" />*/}
                <h1>Transforming ideas into a digital reality</h1>
            </div>
        </motion.div>

        <motion.div className="listContainer"></motion.div>
    </motion.div>
  )
}

export default Services