import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contact = ()=>{
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus provident corrupti sed ad saepe reprehenderit atque nemo hic? Corrupti vero labore qui ad iure at quidem deserunt beatae nesciunt </p>
        </div>
    );
}

// here we wrapped Contact componet in a High order Component Raninbow
export default Rainbow(Contact);