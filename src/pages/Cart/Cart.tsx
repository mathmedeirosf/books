import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import './Cart.css'
import { useState } from 'react';

export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [itemCounts, setItemCounts] = useState<{ [itemId: number]: number }>({});
    console.log(cartItems);

    const handleQuantityChange = (itemId: number, increment: boolean) => {
        setItemCounts((prevCounts) => {
          const newCounts = { ...prevCounts };
          newCounts[itemId] = increment ? (newCounts[itemId] || 0) + 1 : Math.max((newCounts[itemId] || 0) - 1, 0);
          return newCounts;
        });
    };

    return (
        <>
            <Header />
                    <main className='cart'>
                        <h1>Carrinho de compras</h1>
                        <div className="infos">
                            <ul>
                                <li>
                                    <span>Item</span>
                                </li>
                                <li>
                                    <span>Quantidade</span>
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
                                        <span>
                                            {item.quantity}
                                        </span>
                                        <span>
                                            <strong>
                                                {item.price}
                                            </strong>
                                        </span>
                                        <span></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
            <Footer />
        </>
    );
}