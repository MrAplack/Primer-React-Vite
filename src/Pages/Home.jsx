import { useEffect, useState } from "react";

export default function Home() {

    const [task, setTasks] = useState([])

    const getTask = async () => {

        const response = await fetch("https://api-tasks.vercel.app/api/tasks")

        const data = await response.json()

        setTasks(data)


    }

    const createTask = async () => {

        const response = await fetch("https://api-tasks.vercel.app/api/task", {

        method: "post",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            responsable: "Pedro",
            description: "Es Otra Tarea de Javier"
            
        })

        })

        const data = await response.json()
        await getTask()
        console.log(data)


    }

    useEffect(() => {

        getTask()


    }, [])


    return <div>

        <h1>Home desde componente</h1>
        <button onClick={() => createTask()}>Crear Tarea</button>
        {

            task.map((task) => {


                return <div key={task.id}>

                    <div>Responsable: {task.responsable}</div>
                    <div>Descripcion: {task.description}</div>
                    <hr />

                </div>


            })

        }
    </div>


}