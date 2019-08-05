import React, { Component } from 'react'
import './Inicio.css'
import axios from 'axios'

import { NavLink } from 'react-router-dom';

export class Inicio extends Component {
  state = {
    tarefas: [],
    editTarefa: {
      id: '',
      name: '',
      description: ''
    }
  }
  componentWillMount() {
    axios.get('http://localhost:3000/tarefas').then((response) =>{
      this.setState({
        tarefas: response.data
      })
    })
  }
  render() {
    let tarefas = this.state.tarefas.map((tarefa) => {
      return (
        <tr key={tarefa.id}>
          <td>{tarefa.status}</td>
          <td>{tarefa.name}</td>
          <td>{tarefa.description}</td>
          <td>
          <NavLink to={`edit/${tarefa.id}`} >Nova Tarefa.</NavLink>

          </td>
        </tr>
      )
    });
    return(
      <div align="center" id="body">
        <div id="topo">
          <h1>Lista de Tarefas</h1>
        </div>
        <div id="topo-table">
          <table id="table">
            <thead>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ações</th>
            </thead>
            <tbody>
              {tarefas}
            </tbody>
          </table>
        </div>
        <div id="btn-align">
          <a id="btn" className="botao-color btn"> <NavLink to="/create">Nova Tarefa.</NavLink> </a>

        </div>
      </div>
    );
  }
}
