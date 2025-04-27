import { Link } from 'react-router'
import { ERoute } from '../enums'
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../assets/icons'
import { FACEBOOK_URL, GITHUB_URL, LINKEDIN_URL } from '../constants'
import { memo } from 'react'

type Props = {
  className?: string
}

const Nav = memo(({ className }: Props) => {
  return (
    <ul
      className={`flex max-md:flex-col flex-row items-center max-md:items-end justify-between gap-10 text-zinc-300 ${className}`}
    >
      <li>
        <Link to={ERoute.HOME} className='text-2xl font-bold select-none'>
          Home
        </Link>
      </li>
      <li>
        <Link to={ERoute.ABOUT} className='text-2xl font-bold select-none'>
          About
        </Link>
      </li>
      <li>
        <Link to={ERoute.TECHNOLOGIES} className='text-2xl font-bold select-none'>
          Technologies
        </Link>
      </li>
      <li>
        <Link to={ERoute.PROJECTS} className='text-2xl font-bold select-none'>
          Projects
        </Link>
      </li>
      <li>
        <Link to={ERoute.CONTACT} className='text-2xl font-bold select-none'>
          Contact
        </Link>
      </li>
      <div className='flex items-center gap-5'>
        <li>
          <Link to={FACEBOOK_URL} target='_blank' rel='noopener noreferrer'>
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link to={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon />
          </Link>
        </li>
        <li>
          <Link to={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
            <GithubIcon />
          </Link>
        </li>
      </div>
    </ul>
  )
})

export { Nav }
