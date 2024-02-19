import { useAppSelector } from '../../hooks/redux';
import { price } from '../../utils/priceGenerator';

import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Library.css';

export function Library() {
    const books = useAppSelector(state => state.book.books);

    return (
        <>
            <Header />
            <main className="library">
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
            </main>
            <Footer />
        </>
    );
}