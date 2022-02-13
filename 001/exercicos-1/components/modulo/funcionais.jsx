

export function Comp1() {

   return (
      <h2>Componente 1</h2>
   )
}

export const Comp2 = () => {

   return (
      <h2>Componente 2</h2>
   )
}

export default function Comp3() {  // só pode haver um 'export default'

   return (
      <h2>Componente 3</h2>
   )
}

const Comp4 = () => {

   return (
      <h2>Componente 4</h2>
   )
}

const Comp5 = () => {

   return (
      <h2>Componente 5</h2>
   )
}

export {
    Comp4, Comp5
}

