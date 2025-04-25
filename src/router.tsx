import { createBrowserRouter } from 'react-router'
import {
  HomePage,
  AboutPage,
  TechnologiesPage,
  ContactPage,
  ProjectsPage,
  NotFoundPage,
} from './pages'
import { ERoute } from './enums'
import { Layout } from './layouts/Layout'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
        path: ERoute.HOME,
      },
      {
        Component: AboutPage,
        path: ERoute.ABOUT,
      },
      {
        Component: TechnologiesPage,
        path: ERoute.TECHNOLOGIES,
      },
      {
        Component: ContactPage,
        path: ERoute.CONTACT,
      },
      {
        Component: ProjectsPage,
        path: ERoute.PROJECTS,
      },
    ],
  },
  {
    Component: NotFoundPage,
    path: '*',
  },
])

export { router }
