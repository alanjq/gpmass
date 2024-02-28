import { createRef } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from "../components/TextField";
import { API_URL } from '../shared/functions';


export default function NewPostPage() {
    const refForm = createRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(refForm.current)
        let form = {}

        for (var [key, value] of formData.entries()) {
            form[key] = value;
        }

        if (!form.title) {
            toast.warning("Ingresa el título.");
        }
        if (!form.author) {
            toast.warning("Ingresa el nombre del autor.");
        }
        if (!form.article) {
            toast.warning("Ingresa texto en entrada.");
        }

        if (form.title && form.author && form.article) {

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            };

            fetch(`${API_URL}/blog`, options)
                .then(response => response.json())
                .then(({ result, success }) => {
                    if (!success) {
                        throw new Error(result)
                    } else {
                        toast.success('Entrada publicada correctamente.')
                        refForm.current.reset()
                    }
                })
                .catch(err => {
                    toast.error(err || 'No se pudo guardar la publicación.')
                });

        }
    }

    return (
        <section className="flex-1">

            <ToastContainer autoClose={1500} pauseOnHover />

            <div>
                <form method='post'
                    onSubmit={handleFormSubmit} className="py-4 bg-white bg-opacity-80 px-4 my-6 shadow-md mx-auto w-96 text-center" ref={refForm}>
                    <div className="flex flex-col">
                        <h1 className='text-xl border-b pb-1'>Nueva entrada de blog</h1>
                        <TextField id="title" placeholder="Escribe un título" label="Título" name="title" />
                        <TextField id="author" placeholder="Nombre del autor" label="Author" name="author" />
                        <TextField id="article" type="area" placeholder="Redacta tu entrada aquí" label="Contenido de tu entrada" name="article" />
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