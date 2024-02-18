import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './Confirmation.css'

export default function Confirmation() {

    return (
        <>
            <Header />
                <main className='confirmation'>
                    <h1>Parabéns, sua compra foi finalizada!</h1>
                    <p>A Book's agradece a sua compra.</p>
                    <Link to={'/home'} >
                        <button>Voltar para a página principal</button>
                    </Link>
                </main>
            <Footer />
        </>
    );
}