import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A Pokeball" />
                    <div className="card-content">
                    <Link to={'/' + post.id}>
                        <span className="card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    </div>
                </div>
            )
        })
        ) : (
        <div className="center">No posts to show</div>
        );

        return (
        <div>
            <div className="container">
            <h4 className="center">Home</h4>
            {postList}
            </div>
        </div>
        )
    }
}

// the below state is of redux store's state.
// the mapStateToProps function return an object 
// which represents/having different properties that we want to add to props

const mapStateToProps = (state) => {    // this is redux store's state
    return {
      posts: state.posts
    }
}

// the above mapStateToProps function will be pass to connect method 
// so that when we connect to redux, it knows what data we want to grab from the redux

// connect is basically a function
// which returns higher order component
// so first we invoke the connect function and it will return high order component
// than that high order component will wrapp the Home component and
// gives the power to Home component to connect with redux
export default connect(mapStateToProps)(Home);