import React from "react";
import IMG from './images/charmander.png'

const Card = () => {
    return (
        <>
            <div className="card">
                <h2>1</h2>
                <img src={IMG} alt="charmander" />
                <h2>Charmander</h2>
            </div>
        </>
    )
}

export default Card;