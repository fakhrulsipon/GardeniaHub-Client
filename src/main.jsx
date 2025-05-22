import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import AuthProvider from './provider/AuthProvider';
import ShareTip from './pages/ShareTip';
import PrivetRoute from './provider/PrivetRoute';
import BrowseTips from './pages/BrowseTips';
import TipDetails from './pages/TipDetails';
import MyTips from './pages/MyTips';
import UpdateTips from './pages/UpdateTips';
import ExploreGardeners from './pages/ExploreGardeners';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/shareTip',
        element: <PrivetRoute><ShareTip></ShareTip></PrivetRoute>
      },
      {
        path: '/browseTips',
        element: <BrowseTips></BrowseTips>
      },
      {
        path: '/tip-details/:id',
        loader: ({params}) => fetch(`http://localhost:3000/tip-details/${params.id}`),
        element: <TipDetails></TipDetails>
      },
      {
        path: '/myTips',
        element: <PrivetRoute><MyTips></MyTips></PrivetRoute>
      },
      {
        path: '/updateTips/:id',
        loader: ({params}) => fetch(`http://localhost:3000/tip-details/${params.id}`),
        element: <PrivetRoute><UpdateTips></UpdateTips></PrivetRoute>
      },
      {
        path: '/exploreGardeners',
        loader: () => fetch('http://localhost:3000/actives'),
        element: <ExploreGardeners></ExploreGardeners>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
<RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
