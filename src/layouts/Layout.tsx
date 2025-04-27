import { Outlet } from 'react-router'
import { Header, Footer } from '../components'

export const Layout = () => {
  return (
    <div className='grid-container px-6 xl:px-[15%] md:px-12 bg-[#181818]'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
