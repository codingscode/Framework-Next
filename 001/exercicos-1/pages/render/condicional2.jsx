import BlocoIf from '../../components/blocoIf'



export default function condicional1() {
   const numero = 5

   return (
      <div>
         <BlocoIf teste={ numero % 2 === 0 } >
            <h1>O número {numero} é par</h1>
         </BlocoIf>
         <BlocoIf teste={ numero % 2 === 1 } >
            <h1>O número {numero} é impar</h1>
         </BlocoIf>
      </div>
   )
}

