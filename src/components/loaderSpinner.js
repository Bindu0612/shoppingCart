import React,{Component} from 'react';
import Loader from 'react-loader-spinner';

class LoaderSpinner extends Component{

    render(){
        debugger
        return(
        //     <div className="spinner-border text-primary" role="status">
        //     <span className="sr-only">Loading...</span>
        //   </div>
       <div> <Loader type="Circles" color="#somecolor" height={80} width={80}/> </div>
        );
    }
}


export default LoaderSpinner;