import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useGetBooksQuery } from '../../services/book';
import { price } from '../../utils/priceGenerator';
import { getBooks } from '../../store/slices/bookSlice';
import { useEffect } from 'react';

import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import book from '../../assets/book.svg';
import './Home.css';

export default function Home() {
    const books = useAppSelector(state => state.book.books);
    const dispatch = useAppDispatch();
    const { data, isSuccess } = useGetBooksQuery();

    useEffect(() => {
        if (data) dispatch(getBooks(data.results));
    }, [data]);

    const handleScrollLeft = () => {
        const div = document.getElementById('books');
        if (div) div.scrollLeft -= 280;
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
                    <div className="books-container">
                        <h2> <img src={book} alt='Ícone de livro' />Livros Populares</h2>
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