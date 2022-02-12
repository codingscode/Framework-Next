import { Component } from 'react'



export default class Contador extends Component {

   state = {
      numero: this.props.valorInicial ?? 0  // 1º se existir, 2º valor padrão
   }
   
      
   inc = () => {
      this.setState({
         numero: this.state.numero + 1
      })
   }
   
   dec = () => {
      this.setState({
         numero: this.state.numero - 1
      })
   }
   

   render() {
      return (
         <div>
            <h1>Contador (usando classe)</h1>
            <h2>{this.props.valorInicial}</h2>
            <h2>{this.state.numero}</h2>
            <button onClick={ this.dec } >-</button>
            <button onClick={ this.inc } >+</button>
         </div>
      )
   }
}

