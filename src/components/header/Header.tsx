import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className='container'>
                <img src={logo} alt={`Logomarca da Book's`} />

                <div className='search-bar'>
                    <input type='text' name='book' id='book' placeholder='Pesquisar livros...' />
                    <img src={search} alt='Ícone de pesquisa' />
                </div>

                <nav>
                    <Link className='cart' to='/cart'>
                        <div className='cart-items'><span>2</span></div>
                        <img src={cart} alt='Ícone de carrinho de compras' />
                    </Link>
                </nav>
            </div>
        </header>
    );
}