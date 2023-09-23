import React, { useState } from 'react'

export const FollowCard = ({userName, name, initialIsFollowing}) => {

    const [text, setText] = useState('Seguir');
    console.log(name);
    const cambiarSeguir = () => {
        if (text == 'Seguir') {
            setText('Siguiendo');
        }
    }

    return (
        <article>
            <div>
                <img src={`https://unavatar.io/youtube/${userName}`} alt="" />
                <div>{name}
                    <span>@{userName}</span>
                </div>
            </div>
            <button onClick={cambiarSeguir}>{text}</button>
        </article>
    )
}
