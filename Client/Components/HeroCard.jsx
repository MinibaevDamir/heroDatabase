import React, {useCallback, useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {useHttp} from "../hooks/http.hook";

const HeroesCard = ({data}) => {
    const {request} = useHttp()
    const history = useHistory();
    const DetailsOnClicked = (id) => {
        history.push(`/details/${id}`)    }
    const EditOnClicked = (id) => {
        history.push(`/edit/${id}`)
    };
    const DeleteOnClicked = async (id) => {
        try {
            const data = await request('/api/heroes/delete', 'POST', {id: id})
        } catch (e) {
        }
    };
    return <div>
        <div>
        </div>
        <div>
            {data.heroes.map(hero => <div key={hero.nickname}>
                 <Card spacing={5}>
                    <div>
                        <Typography variant="h5">
                            {hero.nickname}
                        </Typography>
                    </div>
                    <div>
                    </div>
                    <Typography variant="h6">
                        {hero.real_name}
                    </Typography>
                    <div>
                            <img
                                src="https://image.api.playstation.com/vulcan/img/rnd/202010/2417/tnCutdREPv6Pa7atqb8MTxGW.png?w=440"/>
                    </div>
                    <div>
                        <Typography>
                            Skills:
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            {hero.superpowers}
                        </Typography>
                    </div>
                    <div>
                        <Button onClick= {DetailsOnClicked.bind(this, hero._id)}>
                            Details
                        </Button>
                        <Button onClick= {EditOnClicked.bind(this, hero._id)}>
                            Edit
                        </Button>
                        <Button onClick= {DeleteOnClicked.bind(this, hero._id)}>
                            Delete
                        </Button>
                    </div>
                </Card>
                 </div>)}
        </div>
    </div>

}


export default HeroesCard;