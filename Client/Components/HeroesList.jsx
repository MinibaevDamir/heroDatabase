
import React, {useCallback, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import HeroCard from "./HeroCard";
import {Pagination, usePagination} from "@material-ui/lab";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    pagination: {
        marginLeft: "46%"
    }
}))

const HeroesList = (props) => {
    const classes = useStyles();
    const [wait, setWait] = useState(true)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const {request} = useHttp()
    let onPageChanged = (e, paginationPage) => {
        setPage(paginationPage)
    }
    const fetchHeroes = useCallback(async (getPage) => {
        try {
            const fetched = await request('/api/heroes/get', 'POST', {page: getPage})
            setData(fetched)
            setWait(false)
        } catch (e) {
        }
    }, [request])
    useEffect(() => {
        fetchHeroes(page)
    }, [fetchHeroes, page])
    if (!wait) {
        return <div>
            {data.count > 5 && <Pagination count = {data.count/5} onChange={onPageChanged}   className={classes.pagination}/>}
            <HeroCard data = {data} style ={{marginTop: "2rem"}}/>
            </div>
    }
    else {
        return <div>

        </div>
    }
}


export default HeroesList;