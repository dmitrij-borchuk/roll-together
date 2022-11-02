import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './ErrorPage'
import { AuthenticationForm } from './auth/SignIn'
import { RoomListPage } from './rooms/components/RoomsListPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <AuthenticationForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/rooms',
    element: <RoomListPage />,
    errorElement: <ErrorPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
