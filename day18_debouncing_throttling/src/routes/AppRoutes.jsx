import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import App from '../App'

import { getUser } from '../apis/userApi'

let About = lazy(() => import("../pages/About"))
let Contact = lazy(() => import("../pages/Contact"))

const AppRoutes = () => {
    let router = createBrowserRouter([
			{
				path: "/",
				element: <MainLayout />,
				children: [
					{
						path: "",
						element: <App />,
					},
					{
                        path: "about",
                        loader: getUser,
                        hydrateFallbackElement: <h1>Loading users data</h1>,
						element: (
							<Suspense fallback={<h1>Loading About</h1>}>
								<About />
							</Suspense>
						),
					},
					{
						path: "contact",
						element: (
							<Suspense fallback={<h1>Loading Contact</h1>}>
								<Contact />
							</Suspense>
						),
					},
				],
			},
		]);

  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes