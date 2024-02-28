import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { API_URL, formatDate } from "../shared/functions"

export default function BlogPage() {
    let { postId } = useParams()

    const { data, error, loading } = useFetch(`${API_URL}/blog?id=${postId}`)

    if (isNaN(postId)) {
        return <div>Select a post from the list.</div>
    }

    return <article className="flex flex-col">
        {loading && 'loading...'}

        {error && <div className="px-4 py-2 flex w-fit mx-auto my-auto bg-red-500 text-white">No se pudo cargar la publicación solicitada.</div>}

        {data && <div className="flex flex-1 flex-col mt-5 mx-auto gap-6 w-8/12 text">
            <h1 className="text-center text-3xl text-gray-600">{data.title}</h1>
            <div className="flex flex-row">
                Publicado el&nbsp;
                <span className="flex">
                    {formatDate(data.published)}
                </span> &nbsp;por&nbsp;
                <span className="flex">{data.author}</span>
            </div>
            <h1 className="leading-8">{data.article}</h1>
        </div>}
    </article>
}