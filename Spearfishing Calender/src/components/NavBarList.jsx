import React from 'react'


function NavBarList(props){
    return (
    <li><a name= {props.name} className="nav-list" onClick={props.onHandleClick}>{props.icon} {props.title}</a></li>
    )

}

export default NavBarList;