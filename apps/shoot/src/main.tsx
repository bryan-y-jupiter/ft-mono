import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './polyfill';
import './env';

import { router } from './router';
import './tailwind.css';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(<RouterProvider router={router} />);
