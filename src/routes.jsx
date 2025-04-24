import App from './App';
import Favourites from './pages/Favourites';
import SearchPage from './pages/SearchPage';
import CollectionPage from './pages/CollectionPage'; // Adjust path if needed
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <div>404 Not Found</div>,
		children: [
			{
				path: '/favourites',
				element: <Favourites />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/collections',
				element: <CollectionPage />, // ✅ New route
			},
			{
				path: '/About',
				element: <AboutPage />, // ✅ New route
			},{
				path: '/Home',
				element: <HomePage/>, // ✅ New route
			},
		],
	},
];

export default routes;
