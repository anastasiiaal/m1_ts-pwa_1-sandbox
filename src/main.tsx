import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Agenda from './screens/Agenda.tsx';
import Counter from './screens/Counter.tsx';
import ButtonsTest from './screens/ButtonsTest.tsx';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/agenda",
        element: <Agenda />
      },
      {
        path: "/counter",
        element: <Counter />
      },
      {
        path: "/buttons",
        element: <ButtonsTest />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
  </StrictMode>,
)
