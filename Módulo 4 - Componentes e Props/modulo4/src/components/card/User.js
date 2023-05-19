import React from "react";

export function User(props) {
    return(
        <div className="user">
            <img 
                className="avatar-img"
                src={props.user.avatarUrl}
                alt={props.user.name}
            />
            <p className="username">{props.user.name}</p>
        </div>
    )
}

