import React from 'react';

const Ninjas = (props) =>{
    const {ninjas} = props;
    const ninjaList = ninjas.map(ninja =>{
        // This is a conditional output
        if (ninja.age > 20){
            return (
                <div className="ninja" key = { ninja.id } >
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            );
        }else{
            return null;
        }
    });
    return (            
        <div className="ninja-list">
            { ninjaList }
        </div>
    );
    // we can directly write in return 
    // but it not looks clean 
    // return (            
    //     <div className="ninja-list">
    //         {
    //             ninjas.map(ninja =>{
    //                 // This is a conditional output
    //                 if (ninja.age > 20){
    //                     return (
    //                         <div className="ninja" key = { ninja.id } >
    //                             <div>Name: { ninja.name }</div>
    //                             <div>Age: { ninja.age }</div>
    //                             <div>Belt: { ninja.belt }</div>
    //                         </div>
    //                     );
    //                 }else{
    //                     return null;
    //                 }
    //             })
    //         }
    //     </div>
    // );
}

export default Ninjas;