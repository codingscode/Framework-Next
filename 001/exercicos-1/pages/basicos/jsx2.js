

export default function jsxDiferente2() {

    const array = [
        <li>produto 1</li>,
        <li>produto 2</li>,
        <li>produto 3</li>,
        <li>produto 4</li>,
        <li>produto 5</li>
    ]

    const retorno = (
       <div>
           <h1>JSX #02</h1>
           <div>
              {array.map((cada, i) => (<div key={i}>{cada}</div>))}

           </div>
       </div>
    )

    return retorno
 
}
