import { useMemo } from 'react'
import { motion } from 'framer-motion'

const TechnologiesPage = () => {
  const techStacks = useMemo(
    () => [
      'HTML5',
      'CSS3',
      'SASS',
      'JS',
      'TS',
      'ReactJS',
      'NextJS',
      'Redux',
      'Tailwind',
      'Bootstrap',
    ],
    []
  )

  const uiLibraries = useMemo(() => ['MUI', 'Antd', 'Shadcn'], [])

  const tools = useMemo(() => ['Jira', 'Git'], [])

  return (
    <div>
      <section>
        <h1 className='text-[40px] text-gray-300 font-bold'>Tech Stacks</h1>
        <div className='grid grid-cols-5 gap-4'>
          {techStacks.map((tech, index) => (
            <motion.img
              whileHover={{ scale: 1.1 }}
              className='p-3'
              key={index}
              src={`src/assets/images/${tech}.svg`}
              width={120}
            />
          ))}
        </div>
      </section>
      <section className='mt-4'>
        <h1 className='text-[40px] text-gray-300 font-bold'>UI Library</h1>
        <div className='grid grid-cols-5 gap-4'>
          {uiLibraries.map((tool, index) => (
            <motion.img
              whileHover={{ scale: 1.1 }}
              className='p-3'
              key={index}
              src={`src/assets/images/${tool}.svg`}
              width={120}
            />
          ))}
        </div>
      </section>
      <section className='mt-4'>
        <h1 className='text-[40px] text-gray-300 font-bold'>Tools</h1>
        <div className='grid grid-cols-5 gap-4'>
          {tools.map((tool, index) => (
            <motion.img
              whileHover={{ scale: 1.1 }}
              className='p-3'
              key={index}
              src={`src/assets/images/${tool}.svg`}
              width={120}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export { TechnologiesPage }
