import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import CreatePage from "./Components/CreatePage";
import HeroesList from "./Components/HeroesList";
import DetailsPageContainer from "./Components/DetailsPageContainer";
import EditPageContainer from "./Components/EditPageContainer";


const RouteController = props => {
    return (
        <Box>
            <Route exact path={'/'} render={() => <HeroesList/>}/>
            <Route path={'/create'} render={() => <CreatePage/>}/>
            <Route path={`/details/:id`} render={() => <DetailsPageContainer/>}/>
            <Route path={`/edit/:id`} render={() => <EditPageContainer/>}/>
        </Box>
    )
}

export default RouteController;