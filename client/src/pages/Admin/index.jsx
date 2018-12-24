import React, { Component } from 'react';
import API from '../../utils/API';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      comments: []
    };

  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getAllUsers()
      .then(res => {
        console.log(res.data)
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log(err))
  }

  userTempBan = (id, status) => {
    console.log("ayylmao")
    API.updateUserStatus( id, {
      status: status
    })
    .then(res => console.log(res))
  }

  userPermBan = () => {
    //
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 offset-2">
              <table class="table table-dark table-sm">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Image</th>
                    <th scope="col">Verified</th>
                    <th scope="col">Permissions</th>
                    <th scope="col">Created</th>
                    <th scope="col">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map(user => (
                    <tr>
                      <th scope="row">{user.id}</th>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.profileImg}</td>
                      <td>{user.verified ? "true" : "false"}</td>
                      <td>{user.permissions}</td>
                      <td>{user.createdAt}</td>
                      <td>{user.updatedAt}</td>
                      <td><button className="btn btn-danger btn-sm" onClick={() => this.userTempBan(user.id, "temp")}>Temp Ban</button></td>
                      <td><button className="btn btn-danger btn-sm">Perm Ban</button></td>
                      <td><button className="btn btn-success btn-sm">Unban</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-4">
            
            </div>
            <div className="col-4">
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Test;