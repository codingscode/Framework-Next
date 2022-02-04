import Filho from './Filho'


export default function Pai(props) {

   function falarComigo() {
      console.log('Alguém falou comigo!')
   }

   return (
      <div>
         <Filho funcao={falarComigo} />
      </div>
   )
}

