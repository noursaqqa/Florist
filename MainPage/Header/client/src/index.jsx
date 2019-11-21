import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const Welcome = ({user, onSignOut})=> {
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {
  
  handleSignIn(e) {
    e.preventDefault()
    let email = this.refs.email.value
    let password = this.refs.password.value
   //this.props.onSignIn(email, password)
   $.ajax({
    type: "POST",
    url: "/login",
    data:{
        email: email,
        password:password
    }, 
    datatype: "json",
    success:function(){
        console.log("sucess login the user");
    },
    error: function(request, status, error) {
          console.log("error post");
        }
    });
  }

  render() {
    return (
      <div className="form">
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="email" placeholder="enter you email" />
        <br></br>
        <br></br>
        <br></br>

        <input type="password" ref="password" placeholder="enter password" />
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" value="Login" />

        <br></br>
        <br></br>
        <br></br>
        <h3>_____________________</h3>

        <h3>Don't have an Account?!</h3>
        <br></br>
        <input type="submit" value="Sign Up" />

      </form>
       </div>
    )
  }

}




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signUp(username, email, password) {
   
    this.setState({
      user: {
        username,
        email,
        password
      }
    })
  }
  signOut() {
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        <h1 id="title">Please Login to continue</h1>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
  } 
};

ReactDOM.render(<App/>, document.getElementById("app"));