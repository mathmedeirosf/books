import { useState } from 'react';
import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useGetBooksQuery } from '../../services/book';
import { price } from '../../utils/priceGenerator';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import book from '../../assets/book.svg';
import './Home.css';

export default function Home() {
    const { data: books } = useGetBooksQuery();

    const handleScrollLeft = () => {
        const div = document.getElementById('books');

        if (div) div.scrollLeft -= 260;
    }
    const handleScrollRight = () => {
        const div = document.getElementById('books');

        if (div) div.scrollLeft += 280;
    }

    return (
        <>
            <Header />
            <main className='home'>
                {books && <>
                    <h2> <img src={book} alt='Ícone de livro' />Livros Populares</h2>
                    <div className="books-container">
                        <div className="books" id='books'>
                            {books.results.map(book => (
                                <Book
                                    id={book.id}
                                    title={book.title}
                                    author={book.authors[0].name}
                                    price={`R$ ${price()}`}
                                    image={book.formats['image/jpeg']}
                                />
                            ))}

                        </div>
                        <img id='left' src={arrowLeft} onClick={() => handleScrollLeft()} />
                        <img id='right' src={arrowRight} onClick={() => handleScrollRight()} />
                    </div>
                </>}
            </main>
            <Footer />
        </>
    );
}