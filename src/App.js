import React, { Component } from 'react';
import './App.css';

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
              return <li key={index} onClick={() => {this.removerTarefa(tarefa)}}>
                {tarefa}
              </li>
            }
          )}
        </ul>
        {this.state.tarefaDeletada ? (
          <p>Tarefa deletada</p>
        ) : (<p></p>)}
      </div>
    );
  }
}

export default App;
