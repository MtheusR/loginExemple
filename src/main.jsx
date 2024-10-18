import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './routes/home.jsx';
import PageNotFound from './routes/PageNotFound.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <PageNotFound />,
		// children: [{ path: '/home', element: <Home /> }],
	},
	{
		path: '/home',
		element: <Home />,
		errorElement: <PageNotFound />,
		// children: [{ path: '/home', element: <Home /> }],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
