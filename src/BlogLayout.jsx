import { Outlet } from "react-router-dom";
import CreatePostButton from "./components/CreatePostButton";
import PostList from "./components/PostList";
import { useFetch } from "./hooks/useFetch";
import BlogFilter from "./components/BlogFilter";
import { API_URL } from "./shared/functions";
import { useState } from "react";

export default function BlogLayout() {
    const [urlApi, setUrlApi] = useState(`${API_URL}/blog`)
    const { data, loading, error } = useFetch(urlApi)

    return <div className="flex flex-row flex-wrap">
        <aside className="flex flex-auto w-full border bg-green-400 gap-4">
            <CreatePostButton />
            <BlogFilter onChange={setUrlApi} />
        </aside>
        <aside className="flex flex-shrink border bg-red-50 border-r-4 border-r-slate-500 mr-1 pr-2">
            {loading && <div>Loading blog posts...</div>}
            {error && <section>Regresa más tarde, tal vez ya tengamos algo que mostrar.</section>}
            <PostList data={data} extract={true} />
        </aside>
        <aside className="flex flex-1 border bg-yellow-50">
            <Outlet />
        </aside>
    </div>
}
