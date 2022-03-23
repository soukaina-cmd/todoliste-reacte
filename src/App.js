import React, { Component } from 'react'
import './App.css';
import Task from './Component/taskdelete/task';
import CreateTask from './Component/createTask/createTask';
import Header from './Component/header/header';
import TaskListe from './Component/taskliste/taskliste';



class App extends Component {
  state = {
    header: { text: 'TO DO' },
   contnet:{text:'Task liste' },

    newTask: "",
    todos: [
      { text: 'soukaina' },
      { text: 'nabil' },
    ]
  }


  completeTask = (id) => {
    // delete
    const todos = [...this.state.todos];
    todos.splice(id, 1);
    this.setState({
      todos
    });

  }
  // taryire task
  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  // ajouter uune task
  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      // ajouter une tasck
      text: this.state.newTask
    });
    this.setState({
      todos,
      // input khawi
      newTask: ''

    });
  }
  j



  render() {
    return (
      <div className='container-fluid body'>


        <Header header={this.state.header} />

        <div className='row'>
          <div className='col-lg-6 offset-lg-3'>
            <div id="contnet">

            <CreateTask value={this.state.newTask}
                onChange={this.updateNewTask}
                addTask={this.addTask} />

                <TaskListe contnet={this.state.contnet}/>

              {this.state.todos.map((todo, id) =>
                <Task todo={todo} id={id} completeTask={() => this.completeTask(id)} key={id} />)}
              

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
