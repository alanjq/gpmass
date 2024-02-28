import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


export default function CreatePostButton() {
    return (
        <Link to="/new-post" className="mt-4 shadow-md p-2 mx-3 my-2 active:bg-cyan-700 hover:bg-cyan-500 rounded-md bg-cyan-600 text-white">Nueva entrada</Link>
    )
}