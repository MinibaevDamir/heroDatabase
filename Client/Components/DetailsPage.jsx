
import React, {useCallback, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";

import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import HeroCard from "./HeroCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    image: {
        marginTop: "1%"
    },
    paper: {
      marginTop: "10%"
    },
    nickname: {
        marginLeft: "15%"
    },
    real_name: {
        marginRight: "15%"
    }
}))

const DetailsPage = (props) => {
    const classes = useStyles();
    const [wait, setWait] = useState(true)
    const [data, setData] = useState([])
    const {request} = useHttp()

    const fetchHero = useCallback(async () => {
        try {
            const fetched = await request('/api/heroes/find', 'POST', {id: props.match.params.id})
            setData(fetched)
            setWait(false)
        } catch (e) {}
    }, [request])
    useEffect(() => {
        fetchHero()
    }, [fetchHero], data)
    if (!wait) {
        return <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <Paper elevation={0} className =  {classes.paper}>
                    <img  src="https://image.api.playstation.com/vulcan/img/rnd/202010/2417/tnCutdREPv6Pa7atqb8MTxGW.png?w=440" className={classes.image}/>
                    <Grid container direction = "row"   justify="space-between" >
                    <Typography variant= "h5" className={classes.nickname}>
                        {data.hero.nickname}
                    </Typography>
                    <Typography variant= "h6" className={classes.real_name}>
                        {data.hero.real_name}
                    </Typography>
                    </Grid>
                    <Typography variant= "h6">
                        Superpowers:
                    </Typography>
                    <Typography variant= "h7">
                       - {data.hero.superpowers}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Paper className={classes.paper} elevation={0} >
                    <Typography variant= "h7" className = {classes.description}>
                        - {data.hero.origin_descriptions}
                    </Typography>
                    <Typography variant= "h6" className = {classes.description}>
                        Catch Phrases:
                    </Typography>
                    <Typography variant= "h7" className = {classes.description}>
                        {data.hero.catch_phrase}
                    </Typography>
                </Paper>
            </Grid>
            </Grid>
    }
    else {
        return <div>

        </div>
    }
}




export default DetailsPage;