import React, {Component} from 'react';

class Ninjas extends Component{
    render(){
        const {ninjas} = this.props;
        console.log(ninjas);

        const ninjaList = ninjas.map(ninja =>{
            return (
                // we have to provide unique key identifier to each child element.
                // so that react can identify the unique elements.
                <div className="ninja" key = { ninja.id } >
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            );
        });

        console.log(ninjaList);

        return (            
            <div className="ninja-list">
                {/* react and jsx knows that we want to output the above ninjalist sequentially */}
                { ninjaList }
            </div>
        );
    }
}

export default Ninjas;