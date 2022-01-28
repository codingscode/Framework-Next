


export default function repeticao1() {

   const listaAprovados = [
      'Mário', 'Julia', 'Larissa', 'Gioconda', 'Paulo', 'Simon', 'Roberto', 'Laura'
   ]
   
   function renderizarLista(iteravel) {
   
            
      return iteravel.map( (cada, i) => <li key={i} >{cada}</li> )
   }
   
   return (
      <ul>
         {renderizarLista(listaAprovados)}
      </ul>
   )
}






