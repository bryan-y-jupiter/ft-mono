import { Outlet } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SnackbarProvider } from 'notistack';

import './polyfill';

export function App() {
  return (
      <SnackbarProvider>
        <Layout>
          <Outlet />
        </Layout>
      </SnackbarProvider>
  );
}
