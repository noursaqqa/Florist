import React, { Component } from 'react';
import ReactDOM from 'react-dom';


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
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  
  render() {
    return (
      <div className="form">

     
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
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

class SignUp extends React.Component {
  
 
  handleSignUp(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let email = this.refs.email.value
    let password = this.refs.password.value

    this.props.onSignUp(username, email, password)
  }
  
  render() {
    return (
      <div className="form">

     
      <form onSubmit={this.handleSignUp.bind(this)}>
        <h3>Sign Up</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <br></br>
        <br></br>
        <br></br>

        <input type="text" ref="email" placeholder="enter you email" />
        <br></br>
        <br></br>
        <br></br>

        <input type="password" ref="password" placeholder="enter password" />
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" value="SignUp" />

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