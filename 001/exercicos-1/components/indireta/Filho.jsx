

export default function Filho(props) {

    console.log(props)
    //console.log(props.funcao)

    return (
       <div>
          <h1>filho</h1>
          <button onClick={ props.funcao } >falar com o pai</button>
          <button onClick={ () => props.funcao('estudando next') } >falar com o pai2</button>
       </div>
    )
 }
 
 
