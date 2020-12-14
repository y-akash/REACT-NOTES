import React from 'react';

// UI Component
//   don't contain state
//   receive data from props
//   only concerend with UI
//   *****use functions to create*****

// so here we are not using state 
// therefore we use function component

const Ninjas = (props) =>{
    const {ninjas} = props;
    const ninjaList = ninjas.map(ninja =>{
        return (
            <div className="ninja" key = { ninja.id } >
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
        );
    });
    return (            
        <div className="ninja-list">
            { ninjaList }
        </div>
    );
}

export default Ninjas;