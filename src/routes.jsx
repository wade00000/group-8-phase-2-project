import App from './App';
import Favourites from './pages/Favourites';
import SearchPage from './pages/SearchPage';
import CollectionPage from './pages/CollectionPage'; // Adjust path if needed


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
		],
	},
];

export default routes;
