import { motion } from "framer-motion"


type Props = {
    link: string
    name: string
    description: string
    image: string
}

const WorkCard = ({link,name,description,image}: Props) => {
  return (
    <a href={link} className="h-80 md:w-[30rem] w-[20rem]">
    <motion.div
      className="relative overflow-hidden shadow-lg h-80 md:w-[30rem] w-[20rem]"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={name} className="w-full h-full object-cover filter grayscale" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center flex-col bg-gray-950 bg-opacity-50"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="text-white text-2xl font-robotomono">{name}</h3>
        <p className="text-white font-robotomono">{description}</p>
      </motion.div>
    </motion.div>
    </a>
  )
}

export default WorkCard