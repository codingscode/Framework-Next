

export default function Filho(props) {

    console.log(props)
    //console.log(props.funcao)

    return (
       <div>
          <h1>filho</h1>
          <button onClick={ props.funcao } >falar com o pai</button>
       </div>
    )
 }
 
 
