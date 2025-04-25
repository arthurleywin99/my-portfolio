import { memo } from 'react'

const Footer = memo(() => {
  return (
    <div className='text-center text-zinc-400 select-none'>
      Designed and Develop by{' '}
      <span className='font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent select-none'>
        Giang Bui
      </span>
    </div>
  )
})

export { Footer }
