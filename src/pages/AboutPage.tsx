import { useMemo } from 'react'
import { BuildingIcon, MapPinIcon } from '../assets/icons'
import { Link } from 'react-router'

type TInfor = {
  href: string
  duration: string
  location: string
}

type TExperience = {
  title: string
  company: string
  jobType: string
} & TInfor

type TEducation = {
  major: string
  name: string
  type: string
} & TInfor

const AboutPage = () => {
  const workingExperiences: TExperience[] = useMemo(
    () => [
      {
        title: 'Mobile App Developer',
        href: 'https://www.zien.vn/',
        company: 'Zien Solutions',
        duration: 'Apr 2023 - June 2023',
        jobType: 'Internship',
        location: 'Ho Chi Minh City, Vietnam',
      },
      {
        title: 'Frontend Web Developer',
        href: 'https://www.zien.vn/',
        company: 'Zien Solutions VietNam',
        duration: 'June 2023 - May 2025',
        jobType: 'Full-time',
        location: 'Ho Chi Minh City, Vietnam',
      },
    ],
    []
  )

  const educations: TEducation[] = useMemo(
    () => [
      {
        major: 'Information Technology - Software Engineering',
        href: 'https://www.hutech.edu.vn/',
        name: 'HUTECH University',
        duration: 'Oct 2019 - Sep 2023',
        type: 'Bachelor',
        location: 'Ho Chi Minh City, Vietnam',
      },
    ],
    []
  )

  return (
    <div>
      <section>
        <h1 className='text-4xl max-md:text-3xl text-gray-300 font-bold'>About Me</h1>
        <p className='text-2xl text-gray-300 my-4'>
          I am a frontend web developer, 2 years of experience in programming with good
          communication and quick learning skills.
        </p>
        <p className='text-2xl text-gray-300 my-4'>
          I specialize in building modern, responsive web applications using cutting-edge frontend
          technologies.
        </p>
      </section>
      <section className='my-18'>
        <h1 className='text-4xl max-md:text-3xl text-gray-300 font-bold'>Working Experiences</h1>
        {workingExperiences.map((exp, index) => (
          <div key={index} className='my-10 pb-4 border-b-2 border-gray-500'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl text-gray-300 font-bold'>{exp.title}</h3>
              <span className='text-[14px] text-gray-300 text-end p-3 font-bold rounded-4xl bg-green-700 select-none'>
                {exp.jobType}
              </span>
            </div>
            <div className='flex flex-row max-sm:flex-col justify-between items-center max-sm:items-start'>
              <div className='flex flex-row max-sm:flex-col gap-8 items-center max-sm:items-start mt-4'>
                <div className='flex gap-2 items-center'>
                  <BuildingIcon />
                  <Link
                    to={exp.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[16px] text-gray-300'
                  >
                    {exp.company}
                  </Link>
                </div>
                <div className='flex gap-2 items-center text-gray-300'>
                  <MapPinIcon />
                  {exp.location}
                </div>
              </div>
              <p className='text-[16px] text-gray-300 mt-4'>{exp.duration}</p>
            </div>
          </div>
        ))}
      </section>
      <section className='my-18'>
        <h1 className='text-4xl max-md:text-3xl text-gray-300 font-bold'>Education</h1>
        {educations.map((edu, index) => (
          <div key={index} className='my-10 pb-4 border-b-2 border-gray-500'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl text-gray-300 font-bold'>{edu.major}</h3>
              <span className='text-[14px] text-gray-300 text-end p-3 font-bold rounded-4xl bg-green-700 select-none'>
                {edu.type}
              </span>
            </div>
            <div className='flex flex-row max-sm:flex-col justify-between items-center max-sm:items-start'>
              <div className='flex flex-row max-sm:flex-col gap-8 items-center max-sm:items-start mt-4'>
                <div className='flex gap-2 items-center'>
                  <BuildingIcon />
                  <Link
                    to={edu.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[16px] text-gray-300'
                  >
                    {edu.name}
                  </Link>
                </div>
                <div className='flex gap-2 items-center text-gray-300'>
                  <MapPinIcon />
                  {edu.location}
                </div>
              </div>
              <p className='text-[16px] text-gray-300 mt-4'>{edu.duration}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export { AboutPage }
