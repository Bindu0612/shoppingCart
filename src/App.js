import React, { Component } from 'react';
import './App.css';
// import HeadingBar from '../src/components/headingBar';
import Menu from './components/menu';
import MenCategory from './components/menCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './components/errorBoundary';

class App extends Component {

    render() {

        return (
            // <ErrorBoundary>
            <div> 
                <Menu />
                <MenCategory />
            </div>
            //  </ErrorBoundary>
        )
    }
}




export default App;
