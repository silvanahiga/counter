import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addCounter, removeCounter, resetCounter } from "./store"

class App extends React.Component {

  handleClick() {
    const { dispatch } = this.props
    dispatch(addCounter())
  }

  handleRemove(){
    const { dispatch } = this.props
    dispatch(removeCounter())
  }

  handleReset(){
    const { dispatch } = this.props
    dispatch(resetCounter())
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        Counter: {this.props.counter}
        <br />
        <button onClick={() => this.handleClick()}>sumar</button>
        <button onClick={()=> this.handleRemove()}>restar</button>
        <button onClick={()=> this.handleReset()}>reset</button>
        <p>HOLA COURSEIT - {this.props.name}</p>

      </div>
    );
  }

}

function mapStateToProps(state) {   ///esto es la funcion que hace que se conecte app con el estado y de ahi podemos usar la info por props//
    //aca te conviene hacer un console log para ver que te llega por props del estado
  return {
    name: state.name,
    counter: state.counter
  }
 
}
export default connect(mapStateToProps)(App);
