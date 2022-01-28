import Subdivisao from './Subdivisao'
import estilos from '../styles/Linha.module.css'




export default function Linha(props) {

   return (
      <div className={estilos.linha} >
         <Subdivisao />
         <Subdivisao preta />
         <Subdivisao />
         <Subdivisao preta />
         <Subdivisao />
         <Subdivisao preta />
         <Subdivisao />
         <Subdivisao preta />
      </div>
   )
}











