

import Cart from './assets/cart/Cart';
import './App.css'

import Root from './assets/Root';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Store from './assets/Store/Store';
import Home from './assets/Home/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route path="store" element={<Store />}></Route>
      <Route path="cart" element={< Cart />} />
      <Route path="home" element={< Home />} />

      {/* ... etc. */}
    </Route>
  )
);
function App() {


  return (
   
    <RouterProvider router={router} />
 
  )
}

export default App
