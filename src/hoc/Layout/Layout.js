import React, {Component} from "react";
// import NavBar from "../../container/NavBar/NavBar";
// import Home from "../../views/Home/Home";
import SideNav from "../../container/SideNav/SideNav";
// import LabRat from "../../component/LabRat/LabRat";
import {Switch,Route } from "react-router-dom";
// import Search from "../../views/Search/Search";
import routes from '../../AppRoutes'
// import {Redirect} from "react-router-dom";

class Layout extends Component{
    state = {
        navItems:[
            {id:1, label:'Tune-it!',path:'/'}
        ]
    };

    render() {
        return(
            <main>
                <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=swap" rel="stylesheet"/>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Advent+Pro&display=swap');
                </style>
                <div className="boxa">
                    <SideNav navItem={this.state.navItems}/>
                    <div className="content-area">
                        <Switch>
                            {routes.map((route,key)=>(
                                <Route path={route.path}
                                       key={key}
                                       component={route.component}
                                       exact={route.exact}/>
                            ))}
                        </Switch>
                    </div>
                </div>
            </main>
        );
    }
}

export default Layout;