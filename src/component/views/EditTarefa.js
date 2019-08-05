import React, { Component } from 'react'
import { Inicio } from './Inicio';
import './Create.css'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//import { NavLink } from 'react-router-dom';

export class EditTarefa extends Component {
  state = {
    tarefas: [],
    editTarefa: {
      id: '',
      name: '',
      description: ''
    }
  }
  updateTarefa(){
    let {status,name,description} = this.editTarefa;
    axios.put('http://localhost:3000/tarefas' + this.state.editTarefa.id, {
      status,name,description
    }).then((res) => {
      console.log('res.data')
    });
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/tarefas/${this.props.match.params.id}`).then((res) => {
      this.editTarefa = res.data;
      console.log(res.data.name);
    });
  }
  render() {
    return(
      <div align="center" id="body">
        <div id="topo">
          <h1>Editar Tarefas</h1>
        </div>
        <div id="topo-table">
        <form>
          <label>
            Nome:
            <input id="name" type="text" value={this.state.editTarefa.name} onChange={(e) => {
              let {editTarefa} = this.state;
              editTarefa.name = e.target.value;
              this.setState({editTarefa});
            }} />
          </label>
          <label>
            Descrição:
            <textarea id="description" value={this.state.editTarefa.description} onChange={(e) => {
              let {editTarefa} = this.state;
              editTarefa.description = e.target.value;
              this.setState({editTarefa});
            }}></textarea>
          </label>
          <button id="btn" onClick={this.updateTarefa.bind(this)}>Salvar</button>
        </form>
        </div>
      </div>
    );
  }
}
