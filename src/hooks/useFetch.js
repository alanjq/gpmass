import { useState } from "react";
import { useEffect } from "react";


export function useFetch(url, body) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    // const response = await fetch(url).then((response) => response.json()).then((json) => json)
                    const options = body ? {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },
                        body: JSON.stringify(body)
                    } : null;

                    const response = await fetch(url, options)
                        .then(response => response.json())
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }

}