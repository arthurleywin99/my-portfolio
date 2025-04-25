import { Link } from 'react-router'
import { CONTACT_EMAIL, CONTRACT_TELEPHONE } from '../constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.75,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ContactPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className='h-full flex flex-col justify-center items-center text-[45px] text-white font-bold'
    >
      <motion.h1 variants={itemVariants}>For any questions or contact for works</motion.h1>
      <motion.h1 variants={itemVariants}>Please drop a mail</motion.h1>
      <motion.div variants={itemVariants}>
        <Link
          to={`mailto:${CONTACT_EMAIL}`}
          className='bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent select-none'
        >
          {CONTACT_EMAIL}
        </Link>
      </motion.div>
      <motion.h1 variants={itemVariants}>or</motion.h1>
      <motion.div variants={itemVariants}>
        <Link
          to={`tel:${CONTRACT_TELEPHONE}`}
          className='bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent select-none'
        >
          {CONTRACT_TELEPHONE}
        </Link>
      </motion.div>
    </motion.div>
  )
}

export { ContactPage }
