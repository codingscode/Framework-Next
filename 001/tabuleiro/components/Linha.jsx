import Subdivisao from './Subdivisao'
import estilos from '../styles/Linha.module.css'




export default function Linha(props) {

   return (
      <div className={estilos.linha} >
         <Subdivisao preta={props.preta} />
         <Subdivisao preta={!props.preta} />
         <Subdivisao preta={props.preta} />
         <Subdivisao preta={!props.preta} />
         <Subdivisao preta={props.preta} />
         <Subdivisao preta={!props.preta} />
         <Subdivisao preta={props.preta} />
         <Subdivisao preta={!props.preta} />
       </div>
   )
}











