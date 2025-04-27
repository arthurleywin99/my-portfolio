import { animate, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

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

const HomePage = () => {
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (avatarRef.current) {
      animate(
        avatarRef.current,
        { rotate: 360 },
        {
          type: 'spring',
          repeat: Infinity,
          repeatDelay: 4,
          duration: 4,
        }
      )
    }
  }, [])

  return (
    <div className='h-full flex flex-row max-md:flex-col justify-between max-md:justify-center gap-0 max-md:gap-7 items-center overflow-x-hidden'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='text-[40px] max-md:text-[30px] text-left max-md:text-center text-white font-bold'
      >
        <motion.h1 variants={itemVariants} className='select-none'>
          Hi,👋
        </motion.h1>
        <motion.h1 variants={itemVariants} className='select-none'>
          My name is
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className='font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent select-none'
        >
          Giang Bui
        </motion.h1>
        <motion.h1 variants={itemVariants} className='select-none'>
          I am a software engineer
        </motion.h1>
      </motion.div>
      <div
        ref={avatarRef}
        className='rounded-full border-4 border-x-blue-600 border-y-red-600 flex items-center justify-center select-none'
      >
        <img
          src='https://avatars.githubusercontent.com/u/86364279?v=4'
          alt='Giang Bui'
          className='rounded-full w-[250px] h-[250px] max-md:w-[190px] max-md:h-[190px] object-cover'
        />
      </div>
    </div>
  )
}

export { HomePage }
