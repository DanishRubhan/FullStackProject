import React,{Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";
import Landing from "./Landing";
import {connect} from 'react-redux';
import * as actions from '../actions';

const DashBoard=()=><h1>DashBoard</h1>;
const SurveyNew=()=><h1>SurveyNew</h1>;

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
            <Route exact path="/surveys" component= {DashBoard}/>
            <Route exact path="/surveys/new" component= {SurveyNew}/>
        </div>
        </BrowserRouter> 
        </div>
        )
    }
};

export default connect(null,actions)(App);