import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu';
import MenCategory from './components/menCategory';
import WomenCategory from './components/womenCategory';
import KidsCategory from './components/kidsCategory';
import Rebase from 're-base';
import firebase from 'firebase';
import Trousers from './components/trousers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart';
import Header from './components/header';
import loaderSpinner from './components/loaderSpinner';
// import GoogleLoginApp from './components/googleLogin';
import ErrorBoundary from './components/errorBoundary';

const config = {
    apiKey: "AIzaSyBD4xvAwUO4JyQMagnFWr9GvUZwj9gBlFo",
    authDomain: "shopping-8fac0.firebaseapp.com",
    databaseURL: "https://shopping-8fac0.firebaseio.com",
    projectId: "shopping-8fac0",
    storageBucket: "shopping-8fac0.appspot.com",
    messagingSenderId: "506309324087",
    appId: "1:506309324087:web:f0979dd6d93b94e55bfeb2",
    measurementId: "G-9SP3C6ECYS"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
var provider = new firebase.auth.GoogleAuthProvider();

// callLogin = () => {
// firebase.auth().signInWithPopup(provider).then(function (result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log(user);
//     // ......
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });
// firebase.auth().getRedirectResult().then(function (result) {
//     if (result.credential) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });
// }


class Routing extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={currentUser: null}
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.setState({currentUser: user});
            } else {
                this.setState({currentUser: null});
            }
          }.bind(this));
    }
   render(){
    return (
        <div>
            <div>
                <Header currentUser={this.state.currentUser}/>
            </div>
            
            <Router>
            
                    {/* <Route exact path="/" component={GoogleLoginApp}/> */}
                    {/* <Route exact path="/" component={loaderSpinner} /> */}
                    <ErrorBoundary>
                    <Route exact path="/" component={Menu} />
                    </ErrorBoundary>
                    <Route exact path="/Men" component={MenCategory} />
                    <Route exact path="/Women" component={WomenCategory} />
                    <Route exact path="/Kids" component={KidsCategory} />
                    <Route exact path="/Trousers" component={Trousers} />
                    <Route exact path="/Cart" component={Cart} />
                    

                    
            </Router>
            
             </div>)
}
};

ReactDOM.render(<Provider store={store}> <Routing /></Provider>, document.getElementById('root'));

export { base}