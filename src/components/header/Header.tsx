import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import './Header.css';
import { useAppSelector } from '../../hooks/redux';

export default function Header() {
    const cartItems = useAppSelector(state => state.cart.items).length;
    const { pathname } = useLocation();

    return (
        <header>
            <div className="wrapper">
                <div className='container-top'>
                    <Link to='/home'><img src={logo} alt={`Logomarca da Book's`} /></Link>

                    {pathname === '/home' && <div className='search-bar'>
                        <input type='text' name='book' id='book' placeholder='Pesquisar livros...' />
                        <img src={search} alt='Ícone de pesquisa' />
                    </div>}

                    <nav>
                        <Link className='cart' to='/cart'>
                            <div className='cart-items'><span>{cartItems}</span></div>
                            <img src={cart} alt='Ícone de carrinho de compras' />
                        </Link>
                    </nav>
                </div>
            </div>
            <div className='container-bottom'>
                <NavLink to='/home'>POPULARES</NavLink>
                <NavLink to='/cart'>BIBLIOTECA</NavLink>
                <a className='disabled'>BESTSELLERS</a>
            </div>
        </header>
    );
}