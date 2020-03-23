import React, {Component} from 'react';
import firebase from 'firebase';


var provider = new firebase.auth.GoogleAuthProvider();

    class Header extends Component{
        constructor(props){
            super(props);           
        }    
            callLogin = () =>{        
            firebase.auth().signInWithPopup(provider).then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user);
                console.log("currentUserName", firebase.auth().currentUser.displayName);
                //this.setState({currentUserName:user["displayName"]});
                

                // ...
            }).catch(function (error) {
                console.log(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });


            firebase.auth().getRedirectResult().then(function (result) {
                    if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // ...
                    }
                    // The signed-in user info.
                    var user = result.user;
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
                }
                callLogout = () =>{

                    firebase.auth().signOut().then(() =>{
                        // Sign-out successful.
                        
                       // this.setState({currentUserName:""});
                      }).catch(function(error) {
                        // An error happened.
                      });
                }

                
                
            render(){
                const {currentUser} = this.props;
                return(<div>
                    <div className="headingWrapper">
                    
                    <h1 className="floatLeft"> Drizzle </h1>
                    {currentUser ?  <span>{`Welcome ${currentUser.displayName}`}</span>: null}
                    {!currentUser && <button className= "authenticationButtonStyle" onClick={this.callLogin} >Login </button>}
                    {currentUser && <button className= "authenticationButtonStyle" onClick={this.callLogout} >Logout </button> }
                </div>
                 {/* {firebase.auth() && firebase.auth().currentUser && firebase.auth().currentUser.displayName? firebase.auth().currentUser.displayName : null} */}
                
                </div>
                )
            }
        }

        export default Header;