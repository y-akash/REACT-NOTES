import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    console.log("Inside render",this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}


// ownProps refers to the props of the current componet before we attach additional details from redux store to props
const mapStateToProps = (state, ownProps) =>{
  let id= ownProps.match.params.post_id;
  let tempPost = {};
  // console.log('id',id);
  state.posts.forEach(post => {
    // console.log("State",post.id);
    if (post.id === id){
      console.log("inside if",post);
      tempPost=post;
    }
  });
  return {
    post: tempPost
  }
}

export default connect(mapStateToProps)(Post);