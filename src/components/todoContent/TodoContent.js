import { Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"

import classes from './todoContent.module.scss'

const TodoContent = (props) => {
    const { id } = props

    const [todo] = useSelector(
        state => state.todos.filter(
            todo => todo.id == id
        )
    )
    const { title, content } = todo

    return(
        <Paper className={classes.todo}>
            <Typography
                variant="h3"
                component="h1"
                className={classes.title}
            >{ title }</Typography>
            <Typography
                variant="body1"
                className={ classes.content }
            >{ content }</Typography>
        </Paper>
    )
}

export default TodoContent