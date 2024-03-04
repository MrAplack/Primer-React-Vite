import { useState } from "react";

export default function Validacion (props){

const [age, setAge] = useState(0)

const givePermision =() =>{ 

if(age > 18){
    
    return "Puede Entrar"

}
else if(age === 18){

    return "Estas en el Limite"

}
else {

    return "No Puede Entrar"

}

}

const handleAge = (event) => {

    const ageInNumber = Number(event.target.value)
    setAge(ageInNumber)

}

return(

    <div>

        <input type="number" onChange={handleAge} />
        <div>
            {givePermision()}
        </div>

    </div>

)

}