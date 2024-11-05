import { createBrowserRouter, PathParam } from 'react-router-dom';

import packageJSON from '../package.json';
import { App } from './App';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <>error</>,
      children: [
        {
          index: true,
          lazy: async () => {
            const { Component } = await import('@/pages/home');
            return {
              Component,
            };
          },
        },
      ],
    },
  ],
  { basename: packageJSON.homepage },
);

type Params<Path extends string> = {
  [key in PathParam<Path>]: string | null;
};
