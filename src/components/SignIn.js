import React, { Component } from 'react';

export class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:'',
    };
  }
  render() {
    const login = () => {
     alert("calling login functionality........");
    };
    return (
      <div className='container'>
        <h1>SignIn Component</h1>
        <hr />
        <form>
        <div class="mb-3">
            <label for="exampleInputUserName" class="form-label">Enter User Name</label>
            <input type="text" class="form-control" id="exampleInputUname" value={this.state.username} onChange={(e)=>{
this.setState({username:e.target.value});
    }}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" value={this.state.password} onChange={(e)=>{
     this.setState({password:e.target.value}); 
    }}> Enter Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary" onClick={login()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
