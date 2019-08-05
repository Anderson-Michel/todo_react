import React, { Component } from 'react'
import { Inicio } from './Inicio'
import './Create.css'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//import { NavLink } from 'react-router-dom';

export class CreateTarefa extends Component {
  state = {
    tarefas: [],
    novaTarefa: {
      status: 0,
      name: '',
      description: ''
    },
    editTarefa: {
      id: '',
      name: '',
      description: ''
    }
  }
  createTarefa() {
      axios.post('http://localhost:3000/tarefas', this.state.novaTarefa).then((res) => {
    });
  }
  render() {
    return(
      <div align="center" id="body">
        <div id="topo">
          <h1>Criar Tarefas</h1>
        </div>
        <div id="topo-table">
        <form>
          <label>
            Nome:
            <input id="name" type="text" value={this.state.novaTarefa.name} onChange={(e) => {
              let {novaTarefa} = this.state;
              novaTarefa.name = e.target.value;
              this.setState({novaTarefa});
            }} />
          </label>
          <label>
            Descrição:
            <textarea id="description" value={this.state.novaTarefa.description} onChange={(e) => {
              let {novaTarefa} = this.state;
              novaTarefa.description = e.target.value;
              this.setState({novaTarefa});
            }}></textarea>
          </label>
          <button id="btn" onClick={this.createTarefa.bind(this)}>Salvar</button>
        </form>
        </div>
      </div>
    );
  }
}
