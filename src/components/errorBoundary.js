import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{hasError:true};
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError){        
        return(
            <div>
                <h1>I crashed!</h1>
                </div>

        )
    }

    return this.props.children;
}
}

export default ErrorBoundary;