import React, { Component } from 'react';
import { categories } from '../constants';
import { withRouter } from 'react-router-dom';
import { base } from '../index';
import axios from 'axios';
import LoaderSpinner from './loaderSpinner';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            totalPrice: 0
        }
    }

    // componentWillMount() {
    //     this.itemsRef = base.syncState('items1', {           //database connection
    //         context: this,
    //         state: 'items'
    //     });
    // }

    // componentWillUnmount() {
    //     base.removeBinding(this.itemsRef);
    // }

    // componentDidMount() {
    //     axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    //     .then(res => {
    //       const items = res.data.data;
    //       console.log(items);
    //       this.setState({ items });
    //     })
    // }



    addItem = (title) => {
        const items = this.state.items;
        console.log('item', this.state.items);
        const id = Date.now();
        items[id] = {
            id: id,
            title: title,
            count: 0,
            price: 100,
            totalPrice: 0
        };

        this.setState({ items });
    }

    navigateToMenCategory = (path) => {
        this.props.history.push(path);
    }

    render() {
        debugger
        return (<div> {categories.map(item => (<div className="category" key={item.id}>
            <span className="categoryStyle" onClick={() => this.navigateToMenCategory(item.category)}> {item.category} </span>
            <img className="images" src={item.image} />
        </div>

      ))  }</div>);                                             //using constants.js


    }


// render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (isLoaded) {
//       return <div>Loading...</div>;                         //using fetch
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.employee_name}>
//               {item.employee_name} 
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }



// render() {
//     // console.log(this.state.items);
//     return (
//       <ul>
//         { this.state.items && this.state.items.map(item => <li>{item.employee_name}</li>)}
//       </ul>                      //using axios
//     )
//   }

}
export default (withRouter)(Menu);