import { Component } from 'react'



export default class Contador extends Component {

   state = {
      numero: 7
   }
   

   render() {
      return (
         <div>
            <h1>Contador (usando classe)</h1>
            <h2>{this.props.valorInicial}</h2>
            <h2>{this.state.numero}</h2>
         </div>
      )
   }
}

