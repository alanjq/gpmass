import { createRef, useEffect, useState } from "react";
import { API_URL } from "../shared/functions";

export default function BlogFilter({ onChange }) {
    const inputField = createRef()
    const refSelect = createRef()
    const refForm = createRef()

    const [filterType, setFilterType] = useState('')
    const [filterText, setFilterText] = useState('')
    const [searchUrl, setSearchUrl] = useState(`${API_URL}/blog`)

    useEffect(() => {
        if (filterText === '' || filterType === '') {
            setSearchUrl(`${API_URL}/blog`)
        } else {
            setSearchUrl(`${API_URL}/blog?${filterType}=${filterText}`)
        }
    }, [filterType, filterText])

    useEffect(() => {
        if (onChange) {
            onChange(searchUrl)
        }
    }, [searchUrl])

    const handleFilterReset = (e) => {
        e.preventDefault();
        refForm.current.reset()
        setFilterType('')
        setFilterText('')
    }

    return (
        <section className="items-center flex flex-col flex-1">
            <form className="flex gap-4 flex-row pt-3" ref={refForm}>
                <label className="flex flex-shrink-0 pt-2">Filtrar por:</label>
                <select onChange={({ target }) => setFilterType(target.value)} className="flex flex-col px-3 items-center text-center pt-2" ref={refSelect}>
                    <option value="">Ninguno</option>
                    <option value="q">Cualquiera</option>
                    <option value="author">Autor</option>
                    <option value="title">Título</option>
                    <option value="article">Contenido</option>
                </select>
                <input onKeyUp={({ target }) => setFilterText(target.value)} className="flex flex-col border w-full px-2 outline-orange-300 py-1 border-cyan-600" ref={inputField} />
                <button className="flex bg-gray-100 rounded shadow-sm flex-shrink-0 px-2 py-2 hover:bg-blue-100 active:bg-blue-300" onClick={handleFilterReset}>Borrar filtros</button>
            </form>
        </section>
    )
}
