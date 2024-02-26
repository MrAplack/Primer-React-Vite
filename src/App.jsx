import Counter from "./Components/Counter";
import Validacion from "./Components/Validacion";

export default function App (){

  const fecha = new Date();
  const dia = fecha.getDay();
  const year = fecha.getFullYear();
  const mes = fecha.getMonth()+1;
  const diasemana = 'Domingo'
  const dateFormated = fecha.toDateString();
  console.log(dateFormated);

  


return (

  <div> 
    
  <h1>Mi Primer Componente, la fecha de hoy es {diasemana} {dia} de {mes} de {year}</h1>
    
    <Counter  title = "Contador 0"></Counter>

    <Counter title ="Contador 1" />

    <Validacion />

  </div>
)












 


}