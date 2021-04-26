import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginLeft: theme.spacing(2),
    },

    button: {
    }
}));

export const MenuBar = () => {
    const classes = useStyles()
    let history = useHistory()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={() => history.push("../")} style = {{cursor: "pointer"}}>
                        Heroes Database
                    </Typography>
                    <Typography variant="h7" className={classes.menuButton} onClick={() => history.push("../create")} style = {{cursor: "pointer"}}> Create a new hero</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}