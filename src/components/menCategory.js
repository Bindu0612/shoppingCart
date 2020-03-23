import React, { Component } from 'react';
// import {base} from  '../index';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { menCategories } from '../constants';

class MenCategory extends Component {

    navigateToTrousers = (path) => {
        this.props.history.push(path);
    }

    render() {
        console.log('men data', menCategories);
        return (<div>

            <h2 style={{ "color": "red" }}> Hey Dude! </h2>
            {menCategories.map(item => (<div className="category">
                <span className="categoryStyle" onClick={() => this.navigateToTrousers(item.category)}> {item.category} </span>
                <img className="images" src={item.image} />
            </div>))}

        </div>);

    }
}

export default withRouter(MenCategory);