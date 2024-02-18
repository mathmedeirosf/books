import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useGetBooksQuery } from '../../services/book';
import { price } from '../../utils/priceGenerator';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import book from '../../assets/book.svg';
import './Home.css';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBooks } from '../../store/slices/bookSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Home() {
    const books = useAppSelector(state => state.book.books);
    const dispatch = useAppDispatch();
    const { data, isSuccess } = useGetBooksQuery();

    const fetchBooks = () => {
        if (data) dispatch(getBooks(data.results));
    };

    useEffect(() => {
        if (data) fetchBooks();

    }, [data, dispatch]);

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
                {isSuccess && <>
                    <h2> <img src={book} alt='Ícone de livro' />Livros Populares</h2>
                    <div className="books-container">
                        <div className="books" id='books'>
                            {books.map(book => (
                                <Book
                                    key={book.id}
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