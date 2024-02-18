import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantity, removeCartItem } from '../../store/slices/CartSlice';
import { RootState } from '../../store/store';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import './Cart.css'

export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);

    const handleQuantityChange = (itemId: number, increment: boolean) => {
        dispatch(updateCartItemQuantity({ itemId, increment }));
    };

    const handleRemoveItem = (itemId: number) => {
        dispatch(removeCartItem(itemId));
    };

    return (
        <>
            <Header />
                <main className='cart'>
                    <h1>Carrinho de compras</h1>
                    <div className='books-cart'>
                        <div>
                            <div className="infos">
                                <ul>
                                    <li>
                                        <span>Item</span>
                                    </li>
                                    <li>
                                        <span className='quantity-item'>Quantidade</span>
                                    </li>
                                    <li>
                                        <span>Subtotal</span>
                                    </li>
                                    <li>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="order">
                                <ul className='order-list'>
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
                        </div>
                        <div className='summary'>
                            <ul>
                                <li>
                                    <span>Total</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    );
}