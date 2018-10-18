import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    tarefas: ['Tarefa 1', 'Tarefa 2']
  }

  render() {
    return (
      <div>
        <p>Tarefas</p>
        <ul>
          {this.state.tarefas.map(
            (tarefa) => {
              return <li>{tarefa}</li>
            }
          )}
        </ul>
      </div>
    );
  }
}

export default App;
