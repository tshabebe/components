'use client'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router'
import { paths } from './paths'
import Home from './home'

const router = createBrowserRouter([
  {
    path: paths.app.support.getHref(),
    element: (
      <div>
        <div>Hello from support</div> <OnClickNavigation />
      </div>
    ),
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: (
      <div>
        hello from <NavLink to={'/support'}>test</NavLink>
      </div>
    ),
  },
  {
    path: '*',
    element: <div>404 - Not Found</div>,
  },
])

function OnClickNavigation() {
  return (
    <button onClick={() => (window.location.href = 'https://google.com')}>
      button
    </button>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App
