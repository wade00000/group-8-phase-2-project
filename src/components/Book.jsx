export default function Book({ book }) {
    const { title, authors, publishedDate, description, imageLinks } = book.volumeInfo;

    return (
        <div className="book">
            <img src={imageLinks?.thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{authors?.join(', ')}</p>
            <p>{publishedDate}</p>
            <p>{description}</p>
        </div>
    );
}