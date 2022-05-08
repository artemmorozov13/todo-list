import { Container } from "@mui/material"
import TodoContent from "components/todoContent/TodoContent"
import { useParams } from "react-router"

const Todo = () => {
    const { id } = useParams()

    return(
        <Container>
            <TodoContent id={id} />
        </Container>
    )
}

export default Todo