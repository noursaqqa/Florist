
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/signInPage.jsx";
import SignUpForm from "./components/signUpPage.jsx";



class Main extends Component {
    

    
    render(){
        return (

            <BrowserRouter>
                {/* <div> */}
                {/* <Switch> */}
                        <Route exact path={"/"} component={LoginForm} />
                            {/* <LoginForm />  */}
                        <Route path={"/SignUpForm"} component={SignUpForm} /> 
                            {/* <SignUpForm />     */}
                        {/* </Switch>  */}
                    {/* </div>      */}
                
            </BrowserRouter>
            
        )
    }
};

// class App extends React.Component {
  
//     constructor(props) {
//       super(props)
//       this.state = {
//         user: null
//       }
//     }
    
//     signIn(username, password) {
     
//       this.setState({
//         user: {
//           username,
//           password
//         }
//       })
//     }
  
//     signOut() {
//       this.setState({user: null})
//     }
    
//     render() {
     
//       return (
//         <div>
//           <h1 id="title">Nice to see u again!</h1>
//           { 
//             (this.state.user) ? 
//               <Welcome 
//                user={this.state.user} 
//                onSignOut={this.signOut.bind(this)} 
//               />
//             :
//               <LoginForm 
//                onSignIn={this.signIn.bind(this)} 
//               />
//           }
//         </div>
//       )
      
//     }
    
//   };

ReactDOM.render(<Main></Main>,document.getElementById("app"));





// import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";
// import SignUpForm  from './components/signUpPage.jsx';

// const Welcome = ({user, onSignOut})=> {
//   return (
//     <div>
//       Welcome <strong>{user.username}</strong>!
//       <a href="javascript:;" onClick={onSignOut}>Sign out</a>
//     </div>
//   )
// }

// class LoginForm extends React.Component {
  
 
//   handleSignIn(e) {
//     e.preventDefault()
//     let username = this.refs.username.value
//     let password = this.refs.password.value
//     this.props.onSignIn(username, password)
//   }
  
//   render() {
//     return (
//            <Router>
//       <div className="form">
    
//       <form onSubmit={this.handleSignIn.bind(this)}>
//         <h3>Sign in</h3>
//         <input type="text" ref="username" placeholder="enter you username" />
//         <br></br>
//         <br></br>
//         <br></br>

//         <input type="password" ref="password" placeholder="enter password" />
//         <br></br>
//         <br></br>
//         <br></br>
//         <input type="submit" value="Login" />

//         <br></br>
//         <br></br>
//         <br></br>
//         <h3>_____________________</h3>

//         <h3>Don't have an Account?!</h3>
//         <br></br>
//         <div>
//           <Route 
//           exact
//           path = '/'
//           render = {() => (
//             <NavLink to="/signUpPage" >
//           <button>sign up</button>
//         </NavLink>
//           )}
          
//           />
//           <Route path = "/signUpPage" Component = {SignUpForm} />
        
//         </div>       
//       </form>
//        </div>
//              </Router>

//     )
//   }

// }

// class App extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: null
//     }
//   }
  
//   signIn(username, password) {
   
//     this.setState({
//       user: {
//         username,
//         password,
//       }
//     })
//   }

//   signOut() {
//     this.setState({user: null})
//   }
  
//   render() {
   
//     return (
//       <div>
//         <h1 id="title">Nice to see u again!</h1>
//         { 
//           (this.state.user) ? 
//             <Welcome 
//              user={this.state.user} 
//              onSignOut={this.signOut.bind(this)} 
//             />
//           :
//             <LoginForm 
//              onSignIn={this.signIn.bind(this)} 
//             />
//         }
//       </div>
//     )
    
//   }
  
// };

// ReactDOM.render(<App/>, document.getElementById("app"));