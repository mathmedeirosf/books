import { useGetBooksQuery } from '../../services/book';
import { price } from '../../utils/priceGenerator';

export default function Home() {
    const { data: books } = useGetBooksQuery();

    return (
        <main className='home'>
            {books && books.results.map(book => (
                <div key={book.id}>
                    <img src={book.formats['image/jpeg']} alt={`Capa do livro ${book.title}`} />
                    <h3>{book.title}</h3>
                    <span>R$ {price()}</span>
                </div>
            ))}
        </main>
    );
}