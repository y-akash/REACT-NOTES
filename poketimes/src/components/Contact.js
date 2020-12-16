import React from 'react';

const Contact = (props)=>{
    // the react router automatically applies the few property to props when it redirects.
    // for that it comes in <Route> tag. for example <Route exact path='/' component={Home}/>
    // so after redirect the props will get few property.
    console.log("Contact ",props);

    // here we are redirecting to the '/about' page using programmatic
    setTimeout(()=>{
        console.log(props.history.push('/about'));
    },2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus provident corrupti sed ad saepe reprehenderit atque nemo hic? Corrupti vero labore qui ad iure at quidem deserunt beatae nesciunt </p>
        </div>
    );
}

export default Contact;