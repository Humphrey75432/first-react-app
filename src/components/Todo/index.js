import React, {Component} from "react";
import uuidv4 from 'uuid-v4';
import './Todo.css';
import List from "./List";
import TodoForm from "./TodoForm";

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            items: []
        };
    }

    addTask = values => {
        const { task } = values;
        this.setState({
            items: [
                ...this.state.items,
                {
                    id: uuidv4(),
                    task,
                    complete: false
                }
            ]
        });
    }

    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>

                <TodoForm addTask={this.addTask}/>
                <List items={this.state.items}/>
            </div>
        );
    }
}

export default Todo;