import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import App from '../layout/App';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Project from '../pages/Project';

// TABLEAU AVEC TOUT LES CHILDREN DES ROUTES
const childrenRoutes = [
  { path: '/', element: <Home /> },
  { path: '/project/:id', element: <Project /> },
  { path: '/404', element: <Error /> },
  { path: '*', element: <Navigate to="/404" /> }
]

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* APP EST LA ROUTE PARENT */}
          <Route path='/' element={<App />}>
            {childrenRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;