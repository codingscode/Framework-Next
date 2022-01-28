


export default function repeticao1() {

   const listaAprovados = [
      'Mário', 'Julia', 'Larissa', 'Gioconda', 'Paulo', 'Simon', 'Roberto', 'Laura'
   ]
   
   function renderizarLista() {
   
      const itens = []
      
      for (let i = 0; i < listaAprovados.length; i++) {
         itens.push(<li key={i} >{listaAprovados[i]}</li>)
      }
      
      return (
         <>
            {itens}
         </>
      )
   
   }
   
   return (
      <ul>
         {renderizarLista()}
      </ul>
   )
}






