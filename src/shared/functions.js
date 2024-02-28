export const formatDate = (thedate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(thedate).toLocaleDateString("es-MX", options)
}

export const API_URL = 'http://localhost:3000';
