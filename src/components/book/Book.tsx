import './Book.css';

export interface BookProps {
    id: number
    title: string
    author: string
    image: string
    price: string
}

export default function Book({ id, title, author, price, image }: BookProps) {
    return (
        <div className='book' key={id}>
            <img src={image} alt={`Capa do livro ${title}`} />
            <div className="infos">
                <h3>{title}</h3>
                <h4>{author}</h4>
                <span>{price}</span>
                <button>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    );
}