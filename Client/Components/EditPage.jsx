import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {useHttp} from "../hooks/http.hook";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

const EditPage = (props) => {
    const history = useHistory()
    const classes = useStyles()
    const {request} = useHttp()
    const [form, setForm] = useState({
        real_name: '', origin_descriptions: '', superpowers: '', catch_phrase: '', images: ''})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const createHandler = async () => {
        try {
            const data = await request('/api/heroes/edit', 'POST', {...form})
            history.push('../')
        } catch (e) {}
    }
    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Change your hero
            </Typography>
            <form className={classes.form}>
            <TextField
                variant="outlined"
                margin="normal"
                id="real_name"
                name="real_name"
                required
                fullWidth
                label="Change real name of Hero"
                autoComplete="real_name"
                autoFocus
                value={form.real_name}
                onChange={changeHandler}
            />
            <TextField
                required
                fullWidth
                multiline
                rows={7}
                id="origin_descriptions"
                name="origin_descriptions"
                label="Change story of your hero?"
                variant="outlined"
                value={form.origin_descriptions}
                onChange={changeHandler}
            />
            <TextField
                required
                fullWidth
                id="superpowers"
                name="superpowers"
                label="Change skills of hero"
                value={form.superpowers}
                onChange={changeHandler}
            />
            <TextField
                required
                fullWidth
                id="catch_phrase"
                name="catch_phrase"
                label="Change catch phrases of hero"
                value={form.catch_phrase}
                onChange={changeHandler}
            />
            <TextField
                required
                fullWidth
                id="images"
                name="images"
                label="Change image URL of your hero"
                value={form.images}
                onChange={changeHandler}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={createHandler}
            >
                Change a hero
            </Button>
        </form>
    </div>
</Container>
}



export default EditPage;