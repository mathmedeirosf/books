import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import './Header.css';
import { useAppSelector } from '../../hooks/redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTitle } from '../../store/slices/searchSlice';
import { getBooks, searchBooksByTitle } from '../../store/slices/bookSlice';
import { useGetBooksQuery } from '../../services/book';

export default function Header() {
    const cartItems = useAppSelector(state => state.cart.items).length;
    const title = useAppSelector(state => state.search.title);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { data } = useGetBooksQuery();

    const handleSearch = () => {
        if (pathname !== '/library') dispatch(searchTitle(''));

        if (title !== '') dispatch(searchBooksByTitle(title));
        else if (data) dispatch(getBooks(data.results));
    }

    useEffect(() => {
        handleSearch();
    }, [data, title]);

    return (
        <header>
            <div className='wrapper'>
                <div className='container-top'>
                    <Link to='/home'><img src={logo} alt={`Logomarca da Book's`} /></Link>

                    {pathname === '/library' && <div className='search-bar'>
                        <input
                            type='text'
                            name='book'
                            id='book'
                            placeholder='Pesquisar livros...'
                            onChange={(e) => dispatch(searchTitle(e.target.value))} />
                        <img src={searchIcon} alt='Ícone de pesquisa' />
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
                <NavLink to='/library'>BIBLIOTECA</NavLink>
                <a className='disabled'>BESTSELLERS</a>
            </div>
        </header>
    );
}