import Filho from './Filho'


export default function Pai(props) {

   function falarComigo(parametro1, parametro2, parametro3) {
      console.log(parametro1) // evento click
      console.log(parametro2)
      console.log(parametro3)
      console.log('Alguém falou comigo!')
   }

   return (
      <div>
         <Filho funcao={falarComigo} />
      </div>
   )
}

