import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRef, useState } from "react"
import TextField from "../components/TextField"
import { Link } from 'react-router-dom';


export default function NewPostPage() {
    const refForm = createRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(refForm.current)
        let fields = Object.fromEntries(formData.entries())

        if (!fields.title) {
            toast.warning("Ingresa el título.");
        }
        if (!fields.author) {
            toast.warning("Ingresa el nombre del autor.");
        }
        if (!fields.article) {
            toast.warning("Ingresa texto en entrada.");
        }

        if (fields.title && fields.author && fields.article) {
            fetch('http://localhost:3000/blog', { method: 'post', body: JSON.stringify(fields) })
                .then((response) => response.json())
                .then(() => {
                    toast.success('Entrada publicada correctamente.')
                    refForm.current.reset()
                    setOpenForm(false)
                })
                .catch(() => {
                    toast.error('No se pudo guardar la publicación.')
                })
        }
    }

    return (
        <section className="flex-1">

            <ToastContainer autoClose={1500} pauseOnHover />

            <div>
                <form method='post' 
                 onSubmit={handleFormSubmit} className="py-4 bg-white bg-opacity-80 px-4 my-6 shadow-md mx-auto w-3/12 text-center" ref={refForm}>
                    <div className="flex flex-col">
                        <h1 className='text-xl border-b pb-1'>Nueva entrada de blog</h1>
                        <TextField id="titl" placeholder="Escribe un título" label="Título" name="title" />
                        <TextField placeholder="Nombre del autor" label="Author" name="author" />
                        <TextField type="area" placeholder="Redacta tu entrada aquí" label="Contenido de tu entrada" name="article" />
                        <div>
                            <Link to="/" className="p-2 mx-3 my-2 active:text-red-700 hover:text-red-500 rounded-md outline-none">Cancelar</Link>
                            <button onClick={handleFormSubmit} type="submit" className="shadow-md p-2 mx-3 my-2 w-1/3 active:bg-purple-700 hover:bg-purple-500 rounded-md bg-purple-600 text-white outline-none">Publicar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}