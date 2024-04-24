import React from "react";

const NavItems = (props) => {
    return(
        <div className="nav-items">
            {/*{props.items.map(item=>(*/}
            {/*    <NavItem label={item}/>*/}
            {/*))}*/}
        </div>
    )
};

const NavItem=props=>
{
    return(
        <div className={'nav-item'}>{props.label}</div>
    )
};

export default NavItems;