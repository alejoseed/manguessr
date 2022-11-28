import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PlayGame from './components/play';
import PrintMessage from './components/random';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import { QueryClient, QueryClientProvider } from 'react-query';
import PrintAMessage from './components/testapi';
import PrintManga from './components/randomManga';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/random',
    element: <PrintMessage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/api',
    element: <PrintAMessage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/getmanga',
    element: <PrintManga />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/play',
    element: <PlayGame />,
    errorElement: <ErrorPage/>
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </QueryClientProvider>

);


