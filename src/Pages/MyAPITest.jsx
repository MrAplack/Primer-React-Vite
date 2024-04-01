import { useEffect, useState } from "react"

export default function MyAPITest() {




    const [respuestaAPI, setrespuestaAPI] = useState("")

    const llamaAPI = async () => {

        const response = await fetch("https://localhost:3000")

        const data = await response.json()

        setrespuestaAPI(data)
       


    }
    useEffect(() => { llamaAPI() }, [])

    return <div>

        <h1>API desde componente</h1>

        <h1>La API responde: {respuestaAPI}</h1>

    </div>
}