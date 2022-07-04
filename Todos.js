import TodoItem  from "../TodoItem/TodoItem";
import "./Todos.css";
import Card from "../UI/Card";
const Todos=(props) => {
    const todoList = props.allTodos;
    return(
    <Card className="todos">
    <TodoItem 
    title={todoList[0].title}
    date={todoList[0].date}
    priority={todoList[0].priority}
    />
    <TodoItem 
    title={todoList[1].title}
    date={todoList[1].date}
    priority={todoList[1].priority}
    />
    <TodoItem 
    title={todoList[2].title}
    date={todoList[2].date}
    priority={todoList[2].priority}
    />
    <TodoItem 
    title={todoList[3].title}
    date={todoList[3].date}
    priority={todoList[3].priority}
    />
    </Card>
    )
}