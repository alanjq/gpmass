import { FaChevronRight, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '../shared/functions';

export default function BlogEntry({ id, title, author, article, published, extract = false }) {
    const EXTRACT_LENGTH = 70

    let articleContent = article
    if (article.length > EXTRACT_LENGTH && extract) {
        articleContent = `${article.slice(0, EXTRACT_LENGTH)}...`;
    }

    return (
        <Link to={`/${id}`}
            className="border-b-2 shadow  border rounded-sm border-purple-100 bg-white bg-opacity-90 flex">
            <div className="flex flex-col flex-grow px-4 py-2 ">
                <div className="flex flex-row w-full text-gray-500 text-sm flex-grow">
                    <span className="flex flex-col">{formatDate(published)}</span>
                    {author?.trim()?.length > 0
                        ? <small className="italic flex-auto text-right text-gray-500 pl-3 text-sm"> <FaUser className="inline-block text-sm pb-1" /> {author}</small>
                        : null
                    }
                </div>
                <h1 className="flex flex-col flex-auto font-semibold text-gray-700">{title}</h1>
                <article className="flex-col mt-2 text-gray-600">{articleContent}</article>
            </div>
            <aside className="flex-shrink">
                <button type="button" className="h-full w-full text-blue-500 px-3 rounded"> <FaChevronRight /> </button>
            </aside>
        </Link>
    )
}