import React, { Component } from 'react';
import './App.css';

function Tarefa(props) {
  return (
    <li
      onClick={() => {props.tarefaClicada(props.tarefaNome)}}>
      {props.tarefaNome}
    </li>
  )
}

class App extends Component {
  state = {
    tarefas: ['Tarefa 1', 'Tarefa 2'],
    novaTarefa: '',
    tarefaDeletada: false
  }




  adicionarTarefa() {
    let tarefasAntigas = this.state.tarefas
    this.setState({
      tarefas: tarefasAntigas.concat(this.state.novaTarefa),
      tarefaDeletada: false
    })
  }

  atualizaNovaTarefa(event) {
    this.setState({
      novaTarefa: event.target.value
    })
  }

  removerTarefa(tarefaId) {
    let tarefasAntigas = this.state.tarefas
    let posicao = tarefasAntigas.indexOf(tarefaId)
    this.setState({
      tarefas: tarefasAntigas.filter(
        (tarefa, index) => {return index != posicao}
      ),
      tarefaDeletada: true
    })
  }

  render() {
    return (
      <div>
        <p>Tarefas</p>
        <input type="text" value={this.state.novaTarefa}
          onChange={this.atualizaNovaTarefa.bind(this)}/>
        <button onClick={this.adicionarTarefa.bind(this)}>Nova Tarefa</button>
        <ul>
          {this.state.tarefas.map(
            (tarefa, index) => {
              return <Tarefa
                key={index}
                tarefaIndex={index} tarefaNome={tarefa}
                tarefaClicada={this.removerTarefa.bind(this)}/>
            }
          )}
        </ul>
        {this.state.tarefaDeletada ? (
          <p>Tarefa deletada</p>
        ) : (<p></p>)}

        <p style={{color: this.state.tarefas.length > 3 ? 'red' : 'black'}}>Total de tarefas: {this.state.tarefas.length}</p>
      </div>
    );
  }
}

export default App;
