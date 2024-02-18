import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import CartSlice from './store/slices/CartSlice';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}