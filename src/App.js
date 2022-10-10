import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',

          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]

    },
    {
      path: '*',
      element: <Error></Error>
    },





  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
