import React from 'react'

function PostContainer(props) {
  return (
    <div
      key={props.post.id}
      className="row posts-container no-gutters pb-0 mb-3"
    >
      <div className="col-3 postImg" style={{ backgroundImage: `url("${props.post.itemImg}")` }}>
      </div>

      <div className="userpost col-9 d-flex align-content-around flex-column">
        <h3 className='mb-auto text-center'>
          {props.post.title} - {props.post.category}
        </h3>
        <hr />
        <p className="my-auto mx-3"><span className="postLabel">Description: </span>{props.post.desc}</p>
        <h6 className="my-auto mx-3"><span className="postLabel">Location: </span>{props.post.location}</h6>

        <div className="row no-gutters mx-3 mb-0">
          <div className="col-12 my-auto">
            <p className="mb-0"><span className="postLabel">Price: </span>${props.post.price}</p>
          </div>
          <div className="row">
            <div className="col-12 my-auto">
              <p className="mb-0"><span className="postLabel">Fits: </span>{props.post.carYear} {props.post.carMake} {props.post.carModel}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostContainer

