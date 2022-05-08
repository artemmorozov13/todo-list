import { Dialog, DialogActions, Button, TextField, Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { CREATE_NEW_TODO, CREATE_TODO_POPUP_CLOSE, NEW_TODO_CONTENT, NEW_TODO_TITLE } from "redux/types"
import Localbase from "localbase"
import classes from "./dialog.module.scss"

const DialogPopup = (props) => {
    const open = useSelector( state => state.isCreateTodoPopupOpen )
    const title = useSelector( state => state.newTodoTitle )
    const content = useSelector( state => state.newTodoContent )
    const dispatch = useDispatch()

    const localbase = new Localbase('todos-app')
    localbase.collection('todos')

    const closePopup = () => {
        dispatch( {type: CREATE_TODO_POPUP_CLOSE} )
    }

    const setNewTodoTitle = (e) => {
        dispatch( {type: NEW_TODO_TITLE, payload: e.target.value} )
    }

    const setNewTodoContent = (e) => {
        dispatch( {type: NEW_TODO_CONTENT, payload: e.target.value} )
    }

    const createNewTodo = () => {
        const nextId = Math.round( Math.random() * 999999 )
        const newTodo = {
            id: nextId,
            title: title,
            content: content
        }
        localbase.collection('todos').add(newTodo)
        dispatch({ type: CREATE_NEW_TODO, payload: newTodo })
    }

    return(
        <Dialog
            className={classes.dialog}
            open={open}
        >
            <Box className={classes.dialog}>
                <TextField
                    onChange={ (e) => setNewTodoTitle(e) }
                    className={classes.title}
                    label="Заголовок..."
                    variant="outlined"
                    color="primary"
                    focused
                />
                <TextField
                    onChange={ (e) => setNewTodoContent(e) }
                    className={classes.textArea}
                    label="Что тужно сделать..."
                    color="primary"
                    rows={5}
                    multiline
                />
                <DialogActions className={classes.actionBtns}>
                    <Button
                        onClick={closePopup}
                        color="warning"
                        variant="outlined"
                    >Отмена</Button>
                    <Button
                        onClick={createNewTodo}
                        color="primary"
                        variant="contained"
                        autoFocus>
                        Добавить
                    </Button>
                </DialogActions>
            </Box>
      </Dialog>
    )
}

export default DialogPopup