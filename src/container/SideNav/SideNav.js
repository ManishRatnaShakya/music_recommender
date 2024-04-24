import React, {Component} from "react";
// import Logo from "../../component/Logo/Logo";
import {NavLink, Link} from 'react-router-dom';
// import {Redirect} from "react-router-dom";

class SideNav extends Component {
    state = {
        keyword: ''
    };

    inputHandler = (val) => (
        this.setState({keyword: val})
    );

    logout = () => {
        sessionStorage.clear()
        window.location.reload(true)

    }

    render() {
        return (
            <>
            <div className={"side-nav"}>
                    <div className={"navparent"}>
                    <header>
                        <div className="logoxy"><Link to={'/'}>Tune-it!</Link></div>
                            <nav>
                                <ul className="nav__links">
                                    {sessionStorage.getItem('token') && <li>Welcome, {sessionStorage.getItem('username')}</li>}
                                    <li><Link to={'/artists'}>Artists</Link></li>
                                    <li><Link to={'/radio'}>Radio</Link></li>
                                    {sessionStorage.getItem('token') && <li><Link to={'/youtube'}>Youtube</Link></li>}
                                    {sessionStorage.getItem('token') && <li><Link to={'/favourite'}>Favourites</Link></li>}
                                </ul>
                            </nav>
                        {!sessionStorage.getItem('token')?<Link to={'/login'}><div className="cta">Login</div></Link>:""}
                        {sessionStorage.getItem('token') ? <div className="cta" onClick={this.logout}>Logout</div>:""}
                    </header>
                    </div>
            </div>
</>


        )
    }
}

const SideNavItems = (props) => (
    <div className="side-nav-items">
        {props.items.map((item, key) => (
            <SideNavItem item={item} key={key}/>
        ))}
    </div>
)
const SideNavItem = props => (
    <NavLink activeClassName={'active'} className="side-nav-item" to={props.item.path}>{props.item.label}</NavLink>
);


export default SideNav;