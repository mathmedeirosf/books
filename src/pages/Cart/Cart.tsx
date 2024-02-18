import Summary from '../../components/summary/Summary';
import CartList from "../../components/cartList/CartList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import './Cart.css'

export default function Cart() {
    
    return (
        <>
            <Header />
                <main className='cart'>
                    <h1>Carrinho de compras</h1>
                    <div className='books-cart'>
                        <CartList />
                        <Summary />
                    </div>
                </main>
            <Footer />
        </>
    );
}