import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}>
        <Toaster></Toaster>
    </RouterProvider>
    </div>
  );
}

export default App;
