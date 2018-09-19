import React from 'react';

export function NavBar(props){
    return(
        <div>
            <figure>
                <a>
                    <img src={props.img} alt={props.img} />
                    <figcaption>{props.desc}</figcaption>
                </a>
            </figure>
        </div>
    )
}