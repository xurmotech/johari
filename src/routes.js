
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/login'
import Uploader from './pages/uploader'
import LayoutWithHeader from './components/layoutWithHeader'
import LayoutWithoutHeader from './components/layoutWithoutHeader'
import ProtectedRoute from './components/protectedRoutes';

export const router = createBrowserRouter([
    {        
        path: '/',
        element: <LayoutWithoutHeader />,
        children: [
            { path: '/', element: ( <Login /> )},
        ],
    },
    { 
        path: '/',
        element: <LayoutWithHeader />,
        children: [
            { path: '/uploader',  element: (
                <ProtectedRoute>
                  <Uploader />
                </ProtectedRoute>
              ),
        },        
           
        ],
    },
])
