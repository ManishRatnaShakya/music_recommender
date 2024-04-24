import React from "react";
import Logo from "../../component/Logo/Logo";
import NavItems from "../NavItem/NavItem";

const NavBar= (props) => {
    let logolabel="Rammii";
    return (
        <nav>
            <Logo color={'Red'} label={logolabel}/>
            <NavItems items={props.navItem}/>
        </nav>
    )
}

/*const Topnav = props =>*/
export default NavBar;