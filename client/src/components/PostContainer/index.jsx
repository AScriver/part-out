import React, { Component } from 'react'
import { withRouter } from 'react-router'

class PostContainer extends Component {
  render() {
    const {history} = this.props;
    return (
      <div
        className="row posts-container no-gutters pb-0 mb-3"
        onClick={() => history.push('/item/' + this.props.post.id)}
      >
        <div className="col-3 postImg" style={{ backgroundImage: `url("${this.props.post.itemImg}")` }}>
        </div>

        <div className="userpost col-9 d-flex align-content-around flex-column">
          <h3 className='mb-auto text-center'>
            {this.props.post.title} - {this.props.post.category}
          </h3>
          <hr />
          <p className="my-auto mx-3"><span className="postLabel">Description: </span>{this.props.post.desc}</p>
          <h6 className="my-auto mx-3"><span className="postLabel">Location: </span>{this.props.post.location}</h6>

          <div className="row no-gutters mx-3 mb-0">
            <div className="col-12 my-auto">
              <p className="mb-0"><span className="postLabel">Price: </span>${this.props.post.price}</p>
            </div>
            <div className="row">
              <div className="col-12 my-auto">
                <p className="mb-0"><span className="postLabel">Fits: </span>{this.props.post.carYear} {this.props.post.carMake} {this.props.post.carModel}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default withRouter(PostContainer)

