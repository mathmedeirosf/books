import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Confirmation from './pages/Confirmation/Confirmation';
import { Library } from './pages/Library/Library';
import PrivateRoute from './layouts/PrivateRoute';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route element={<PrivateRoute />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/confirmation' element={<Confirmation />} />
                </Route>
                
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}