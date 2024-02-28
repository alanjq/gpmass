export const formatDate = (thedate) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(thedate).toLocaleDateString("es-MX", options)
}
