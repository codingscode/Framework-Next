

export default function Estilo(props) {

   return (
      <>
         <h1 style={ { backgroundColor: props.numero >= 0 ? 'green' : 'red', color: 'white' } } >
            Texto
         </h1>
      </>
   )
}


