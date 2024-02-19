import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantity, removeCartItem } from '../../store/slices/cartSlice';
import { RootState } from '../../store/store';

import './CartList.css'

export default function CartList() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (itemId: number, increment: boolean) => {
        dispatch(updateCartItemQuantity({ itemId, increment }));
    };

    const handleRemoveItem = (itemId: number) => {
        dispatch(removeCartItem(itemId));
    };

    return (
        <div className='order'>
            <ul className='order-list'>
                <li className='infos'>
                    <span id='item'>Item</span>
                    <span id='quantity'>Quantidade</span>
                    <span id='subtotal'>Subtotal</span>
                    <span></span>
                </li>
                {cartItems.map((item) => (
                <li className='list' key={item.id} >
                    <h2>
                        <img src={item.image} alt={item.title} />
                        {item.title}
                    </h2>
                    <div className='quantity'>
                        <button className='control' onClick={() => handleQuantityChange(item.id, false)}>-</button>
                            {item.quantity}
                        <button className='control' onClick={() => handleQuantityChange(item.id, true)}>+</button>
                    </div>
                    <div className='price'>
                        <strong>
                            {item.price}
                        </strong>
                    </div>
                        <button className='Btn-delete' onClick={() => handleRemoveItem(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}