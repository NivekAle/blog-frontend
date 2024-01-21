import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/login.tsx'

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},

	{
		path: "/login",
		element: <LoginPage />
	},
	{
		path: "/register",
		element: <LoginPage />
	},

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>,
)
