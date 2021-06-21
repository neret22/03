import React, { Fragment, Component, createContext } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export const TodoContext = createContext(null)
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'My ToDo List',
      todos: [{ id: 1, title: "Hello", completed: false }]
    }
  }
  addNewTodo = async (item) => {
    await this.setState(
      {
        ...this.state,
        todos: [...this.state.todos,
        { id: Date.now(), title: item, completed: false }]
      }
    )
    console.log(this.state.todos)
  }

  changeCompletedProp = (id) => {
    const _todos = [...this.state.todos]
    const idx = _todos.findIndex(t => t.id === id)
    if (idx === -1) return null
    _todos[idx].completed = !_todos[idx].completed
    this.setState({ ...this.state, todos: _todos })
  }
  deleteItem = (id) => {
    const _todos = [...this.state.todos]
    const idx = _todos.findIndex(t => t.id === id)
    if (idx === -1) return null
    _todos.splice(idx, 1)
    this.setState({ ...this.state, todos: _todos })
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-3">{this.state.title}</h1>
        <section id="form">
          <Form onAdd={this.addNewTodo} />
        </section>
        <section id="list">
          <TodoContext.Provider value={{
            onComplete: this.changeCompletedProp,
            onDelete: this.deleteItem,
          }}>
            <TodoList
              todos={this.state.todos}
              onComplete={this.changeCompletedProp}
              onDelete={this.deleteItem} />
          </TodoContext.Provider>
        </section>
      </Fragment>
    );
  }
}


export default App;


