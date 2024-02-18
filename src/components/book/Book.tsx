import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice';

import './Book.css';

export interface BookProps {
    id: number
    title: string
    author: string
    image: string
    price: string
}

interface CartItem {
    id: number
    title: string
    image: string
    price: string
}

export default function Book({ id, title, author, price, image }: BookProps) {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        const cartItem = { id, title, image, price, quantity: 1, };
        dispatch(addToCart(cartItem));
    }

    return (
        <div className='book'>
            <img src={image} alt={`Capa do livro ${title}`} />
            <div className="infos">
                <h3>{title}</h3>
                <h4>{author}</h4>
                <span>{price}</span>
                <button onClick={addToCartHandler}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    );
}