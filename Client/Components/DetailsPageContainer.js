import {connect} from 'react-redux';
import React from "react";
import {withRouter} from "react-router-dom";
import DetailsPage from "./DetailsPage";


const DetailsPageContainer = withRouter(DetailsPage);
export default DetailsPageContainer