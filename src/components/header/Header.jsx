import { Container } from "@mui/material"
import Title from "components/title/Title"
import TodoManagePanel from "components/todoManagePanel/TodoManagePanel"
import classes from "./header.module.scss"

const Header = (props) => {
    return(
        <header>
            <Container className={ classes.header }>
                <Title/>
                <TodoManagePanel/>
            </Container>
        </header>
    )
}

export default Header