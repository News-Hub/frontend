import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';

const routerData = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
  },
  {
    path: '/test',
    label: 'test',
    element: <Test />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
