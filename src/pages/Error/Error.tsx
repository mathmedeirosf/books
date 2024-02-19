import notFound from '../../assets/not-found.webp';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Error.css';

export default function Error() {
    return (
        <>
            <Header />
            <main className='error'>
                <img src={notFound} alt='Página não encontrada' />
                <div className='text'>
                    <h1>ERRO 404</h1>
                    <h2>Página não encontrada!</h2>
                </div>
            </main>
            <Footer />
        </>
    );
}