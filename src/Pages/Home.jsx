import { useEffect, useState } from "react";

export default function Home() {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState(null)
    const [responsable, setResponsable] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")


    const refreshFormulario = async () => {

        setResponsable("")
        setDescription("")

    }
    const getTasks = async () => {

        const response = await fetch("http://localhost:3000/tasks")

        const data = await response.json()

        setTasks(data)


    }

    const getTaskById = async (id) => {

        const response = await fetch(`https://api-tasks.vercel.app/api/task/${id}`)

        const data = await response.json()

        setTask(data)


    }

    const deleteTaskById = async (id) => {

        const response = await fetch(`http://localhost:3000/task/${id}`, { method: "delete" })



        const data = await response.json()

        setTask(null)

        await getTasks()



    }

    const updateTaskById = async (id) => {

        const response = await fetch(`https://api-tasks.vercel.app/api/task/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                responsable: "Pedro",
                description: "Es Otra Tarea de Javier"

            })
        })

        const data = await response.json()

        await getTasks()



    }

    const validateForm = () =>{

        if(responsable === "") setError("Responsable no puede ser vacio")
        else if(description === "") setError("Tarea no puede estar vacia")
        else setError("")
    }

    const createTask = async () => {

        const response = await fetch("http://localhost:3000/task", {

            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                responsable: responsable,
                description: description

            })

        })

        const data = await response.json()
        await getTasks()
        console.log(data)
        refreshFormulario()


    }

    useEffect(() => {

        getTasks()


    }, [])


    return <div>

        <h1>Home desde componente</h1>
        <div>
            <h2>Formulario de Cracion</h2>
            <input type="text" value= {responsable} onChange={(event)=> setResponsable (event.target.value)} placeholder="Responsable"></input>
            <input type="text" value= {description} onChange={(event)=> setDescription (event.target.value)} placeholder="Descripcion"></input>
        </div>





        <button onClick={() => createTask()}>Crear Tarea</button>
        {

            tasks.map((task) => {


                return <div key={task.id}>

                    <div>Responsable: {task?.responsable}</div>
                    <div>Descripcion: {task?.description}</div>
                    <hr />

                    <div>

                        <button onClick={() => deleteTaskById(task.id)}>Borrar Tarea</button>

                    </div>

                </div>


            })

        }
    </div>


}