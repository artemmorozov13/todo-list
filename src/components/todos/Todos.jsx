import TodoItem from "components/todoItem/TodoItem"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Localbase from "localbase"
import classes from "./todos.module.scss"
import { SET_NEW_TODO_LIST } from "redux/types"

const Todos = (props) => {
    const localbase = new Localbase('todos-app')
    const dispatch = useDispatch()

    const setTodosState = () => {
        localbase.collection('todos').get()
        .then(todos => {
            console.log(todos)
            dispatch({ type: SET_NEW_TODO_LIST, payload: todos })
        })
    }

    useEffect(
        () => setTodosState(),[]
    )

    const todos = useSelector( state => state.todos )
    
    const view = todos && todos.map( ({ id, title, content }) => (
        <TodoItem
            key={id}
            id={id}
            title={title}
            content={content}
        />
    ))
    return(
        <section className={classes.todos}>
            { view }
        </section>
    )
}

export default Todos