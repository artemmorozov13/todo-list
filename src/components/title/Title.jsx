import { Typography } from "@mui/material"
import data from 'appConfigSettings';
import { HOME_URL } from "pages/routesConfig";
import { Link } from "react-router-dom";

const Title = (props) => {
    const title = data.headerTitle

    return(
        <Typography
            variant="h4"
            component="h1"
        >
            <Link to={HOME_URL}>{ title }</Link>
        </Typography>
    )
}

export default Title