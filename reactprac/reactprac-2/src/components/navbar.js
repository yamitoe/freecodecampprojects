import React from 'react';

export function NavBar(){
    return(
        <div>
            <figure>
                <a>
                    <img src={this.img} alt={this.img} />
                    <figcaption>{this.desc}</figcaption>
                </a>
            </figure>
        </div>
    )
}