import { Button } from "@mui/material"
import DialogPopup from "components/dialogPopup/DialogPopup"
import { useDispatch } from "react-redux"
import { CREATE_TODO_POPUP_OPEN } from "redux/types"

const CreateTodoButton = (props) => {
    const dispatch = useDispatch()

    const openPopup = () => {
        dispatch( {type: CREATE_TODO_POPUP_OPEN} )
    }

    return(
        <>
            <Button
                onClick={openPopup}
                color="primary"
                variant="contained"
            >Новое дело</Button>
            <DialogPopup/>
        </>
        
    )
}

export default CreateTodoButton