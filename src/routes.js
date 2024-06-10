
import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/login'
import Upload from './pages/upload/upload'
import Admin from './pages/admin/admin'
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
                  <Upload />
                </ProtectedRoute>
              ),
        }, 
        { 
            path: '/admin',  
            element: (
                <ProtectedRoute>
                    <Admin />
                </ProtectedRoute>
            ),
        },       
           
        ],
    },
])
