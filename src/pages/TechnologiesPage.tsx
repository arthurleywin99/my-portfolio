import { Fragment, useMemo } from 'react'
import {
  HTML5,
  CSS3,
  SASS,
  JS,
  TS,
  ReactJS,
  NextJS,
  Redux,
  Tailwind,
  Bootstrap,
  MUI,
  Antd,
  Shadcn,
  Jira,
  Git,
} from '../assets/images'

const TechnologiesPage = () => {
  const techStacks = useMemo(
    () => ({
      mainTech: [HTML5, CSS3, SASS, JS, TS, ReactJS, NextJS, Redux, Tailwind, Bootstrap],
      uiLibraries: [MUI, Antd, Shadcn],
      tools: [Jira, Git],
    }),
    []
  )

  return (
    <div>
      <section>
        <h1 className='text-[40px] text-gray-300 font-bold'>Tech Stacks</h1>
        <div className='grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
          {techStacks.mainTech.map((tech, index) => (
            <Fragment key={index}>{tech()}</Fragment>
          ))}
        </div>
      </section>
      <section className='mt-4'>
        <h1 className='text-[40px] text-gray-300 font-bold'>UI Library</h1>
        <div className='grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
          {techStacks.uiLibraries.map((tool, index) => (
            <Fragment key={index}>{tool()}</Fragment>
          ))}
        </div>
      </section>
      <section className='mt-4'>
        <h1 className='text-[40px] text-gray-300 font-bold'>Tools</h1>
        <div className='grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4'>
          {techStacks.tools.map((tool, index) => (
            <Fragment key={index}>{tool()}</Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export { TechnologiesPage }
