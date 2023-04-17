const { useEffect, useState } = require("react");

export default function useLocalStorage(key, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        const item = localStorage.getItem(key);
        const data = JSON.parse(item)
        if (data) {
            setData(data)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data])

    return [data, setData]
}
