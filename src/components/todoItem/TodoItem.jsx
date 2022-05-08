import { Card, Typography, Button } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux"
import { REMOVE_TODO } from "redux/types"
import Localbase from "localbase"
import classes from "./card.module.scss"
import { Link } from "react-router-dom";
import { TODO_URL } from "pages/routesConfig";

const TodoItem = (props) => {
    const { id, title } = props
    
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const localbase = new Localbase('todos-app')

    const removeTodo = () => {
        const newTodoList = todos.filter( todo => todo.id != id )

        localbase.collection('todos').doc({ id }).delete()
        dispatch({ type: REMOVE_TODO, payload: newTodoList })
    }
    
    return(
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
                <Link to={ TODO_URL + id }>{title}</Link>
            </Typography>
            <Button
                item xs={1}
                className={classes.cardClose}
                onClick={removeTodo}
            >
                <ClearIcon/>
            </Button>
        </Card>
    )
}

export default TodoItem