import React,{Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";
import Landing from "./Landing";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
    return (
    <div className="container">
        <BrowserRouter>
        <div>
            <Header />
            <Route exact={true} path="/" component = {Landing} />
            <Route exact path="/surveys" component= {Dashboard}/>
            <Route exact path="/surveys/new" component= {SurveyNew}/>
        </div>
        </BrowserRouter> 
        </div>
        )
    }
};

export default connect(null,actions)(App);