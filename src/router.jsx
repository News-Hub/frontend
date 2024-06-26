import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const routerData = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
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
