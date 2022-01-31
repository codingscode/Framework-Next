

export default function SomentePar(props) {

   if (props.numero % 2 === 0) {
      return <span>{props.numero} | </span>
   }
   else {
      return null
   }
}



