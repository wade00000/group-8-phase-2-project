import App from './App';
import Favourites from './pages/Favourites';
import SearchPage from './pages/SearchPage';

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
		],
	},
];

export default routes;
