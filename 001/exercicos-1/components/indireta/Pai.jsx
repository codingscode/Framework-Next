import Filho from './Filho'


export default function Pai(props) {

   function falarComigo(parametro) {
      console.log(parametro) // evento click
      console.log('Alguém falou comigo!')
   }

   return (
      <div>
         <Filho funcao={falarComigo} />
      </div>
   )
}

