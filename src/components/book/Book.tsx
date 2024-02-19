import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { BookProps } from '../../types/types';
import './Book.css';

export default function Book({ id, title, author, price, image }: BookProps) {
    const dispatch = useDispatch();

    const handleCartItem = () => {
        const cartItem = { id, title, image, price, quantity: 1, };
        dispatch(addToCart(cartItem));
    }

    return (
        <div className='book'>
            <img src={image} alt={`Capa do livro ${title}`} />
            <div className='infos'>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <span>{price}</span>
                <button onClick={handleCartItem}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    );
}