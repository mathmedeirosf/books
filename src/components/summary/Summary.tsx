import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slices/CartSlice';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

import './Summary.css'

export default function Summary () {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const calculateSubtotal = () => {
        return cartItems.reduce((subtotal, item) => {
            const priceWithoutCurrency = item.price.replace("R$ ", "").replace(",", ".");
            const price = parseFloat(priceWithoutCurrency) || 0;
            const quantity = item.quantity || 0;
            return subtotal + (price * quantity);
        }, 0);
    };

    const formatCurrency = (value: number | bigint) => {
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);

        return formattedValue;
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        if (cartItems.length == 0) return formatCurrency(subtotal);
        return formatCurrency(subtotal + 15.50)
    };

    const handleConfirmPurchase = () => {
        dispatch(clearCart());
    };

    return (
        <div className='summary'>
            <ul>
                <li className='summary-list'>
                    Sumario
                </li>
                <li className='summary-subtotal'>
                    <span>Subtotal</span>
                    {formatCurrency(calculateSubtotal())}
                    
                </li>
                <li className='summary-frete'>
                    <span>Frete</span>
                    {cartItems.length == 0 ? <p>R$ 0,00</p> : <p>R$ 15,50</p>}
                </li>
                <li className='summary-total'>
                    <strong>Total</strong>
                    <strong>{calculateTotal()}</strong>
                </li>
            </ul>
            <Link to={'/confirmation'}>
                <button type='submit' className='confirm' onClick={handleConfirmPurchase}>Confirmar compra</button>
            </Link>
        </div>  
    )
}