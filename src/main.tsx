import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login/login.tsx'
import NewArticlePage from './pages/newArticle/newArticle.tsx'
import AuthorPage from './pages/author/author.tsx'
import MyAccountPage from './pages/myAccount/myAccount.tsx'

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
	{
		path: "/author",
		element: <AuthorPage />,
		children: [
			{
				path: "new-article",
				element: <NewArticlePage />
			},
			{
				path: "my-account",
				element: <MyAccountPage />
			}
		]
	},

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>,
)
