import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import Episode from "./pages/Episode";
import {Provider} from "react-redux";
import {store} from "./store";
import EpisodeDetail from "./pages/EpisodeDetail";
import AppLayout from "./layout/AppLayout";
import CharacterDetail from "./pages/CharacterDetail";
import Character from "./pages/Character";
import Favorite from "./pages/Favorite";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Episode/>,
			},
			{
				path: "/episodes/:id",
				element: <EpisodeDetail />,
			},
			{
				path: "/characters",
				element: <Character />,
			},
			{
				path: "/characters/:id",
				element: <CharacterDetail />,
			},
			{
				path: "/favorite",
				element: <Favorite />,
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	</Provider>
);
