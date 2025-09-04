import { createBrowserRouter } from "react-router";


import Root from "./Root";
import AboutUs from "./AboutUs";
import Product from "./Product";
import Home from "./Home";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{ index: true, Component: Home},
			{ path: "AboutUs", Component: AboutUs},
			{ path: "Product", Component: Product }
		]
	}
]);