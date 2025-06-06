import App from './App';
import Favourites from './pages/Favourites';
import SearchPage from './pages/Search';
import About from './pages/About';
import Home from './pages/Home';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <div>404 Not Found</div>,
		children: [
		  {
			index: true,
			element: <Home/>,
		  },
		  {
			path: 'favourites',
			element: <Favourites />,
		  },
		  {
			path: 'search',
			element: <SearchPage />,
		  },
		  {
			path: 'about',
			element: <About/>,
		  },
		  {
			path: 'home',
			element: <Home/>,
		  },
		  
		],
	  }
	  
];

export default routes;
