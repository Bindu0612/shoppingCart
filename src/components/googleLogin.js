import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
 
function GoogleLoginApp(){
const responseGoogle = (response) => {
  console.log(response);
}
    return(
      <div>
        <h1> Login with google </h1>
    <GoogleLogin
      clientId="233667345956-gpf7cksg6ei0n5sapnh7n40cb9m9taj1.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
   </div> )
  

}

   export default GoogleLoginApp;