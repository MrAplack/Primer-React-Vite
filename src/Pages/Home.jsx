import { useEffect } from "react";

export default function Home() {


    const getUsers = async() => {

        const response = fetch ("https://run.mocky.io/v3/41d1f823-da3a-45d6-8421-0c52d54dc4be");

        const data = await response.json()
        console.log(data)

    }



    return (
        <>

            <h1>Home desde componente</h1>

        </>

    )

}