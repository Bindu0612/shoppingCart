import React, { Component } from 'react';
import { trouserTypes } from '../constants';
import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { chunk } from "lodash";
import { withRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { actions } from '../action';
import { base } from '../index';

class Trousers extends Component {
    
    navigateToCart = (path) => {
        console.log(path);
        this.setState({summary: this.props.summary});
        this.props.history.push(path);
    }


    constructor() {
        super();
        this.state = {
            trousers: trouserTypes,
            offset: 0,            //helps us select those items
            data: trouserTypes,
            elements: [],        //items to be displayed on the current page
            perPage: 3,        //number of data items you want on a single page
            currentPage: 0,
            summary : []
           
        }
    }

    componentWillMount() {
        this.itemsRef = base.syncState('summary', {           //database connection
            context: this,
            state: 'summary'
        })};




    /*Increment = (e, selectedItem) => {
       
        console.log("selectedItem ", selectedItem);
        var parentTrouser = this.state.trousers;
        var filtered = parentTrouser.map(item => {
            if (item.id === selectedItem.id) {
                item.count = selectedItem.count + 1;
            }
            return item;
        }
        );
        this.setState({ trousers: filtered });   
         const summary = this.props.summary || {};       
        //  const newSummary = this.props.summary && this.props.summary.map(item=>
        //         selectedItem.id === this.props.summary.item.id ? {...item, count:item.count+1 } : {...selectedItem});
       // const newSummary =  [...summary, selectedItem];     
        this.props.update_summary(selectedItem);
            }
    

    Decrement = (selectedItem) => {
        var parentTrouser = this.state.trousers;
        var flitered = parentTrouser.map(item => {
            debugger;
            if (item.id === selectedItem.id && selectedItem.count > 0) {
                item.count = selectedItem.count - 1;
            }
            return item;
        }
        );

        this.setState({ trousers: flitered });
    }*/


    onpaginationClick = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }

    onSelectItem=(event,flag, selectedItem)=>{
        var parentTrouser = this.state.trousers;
        var filtered = parentTrouser.map(item => {
            if (item.id === selectedItem.id) {
                if(flag === "increment")
                   item.count = selectedItem.count + 1;
                else
                {
                    if(selectedItem.count > 0)
                        item.count = selectedItem.count - 1;
                }
            }
            return item;
        }
        );
        this.setState({ trousers: filtered });   
         const summary = this.props.summary || {};       
        //  const newSummary = this.props.summary && this.props.summary.map(item=>
        //         selectedItem.id === this.props.summary.item.id ? {...item, count:item.count+1 } : {...selectedItem});
       // const newSummary =  [...summary, selectedItem];     
        this.props.update_summary(selectedItem);        


    }

    clickNext = () => {
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    clickPrevious = (pageNumber) => {
        if (this.state.currentPage > 0)
            this.setState({ currentPage: this.state.currentPage - 1 })
    }


    // updateItem = (item) => {
    //     const items = { ...this.state.items };
    //     items[item.id] = item;
    //     this.setState({ items });
    // }

    render() {
        let totalPrice = 0;
        let chunks = chunk(this.state.trousers, 5);
        const trousers = chunks[this.state.currentPage];
        const trousersLength = chunks.length;
        return (
            <div>
                {trousers.map(item => (
                    <div className="category">
                        <span className="categoryStyle"> {item.category} </span>
                        <img className="images" src={item.image} />
                        {/* {item.count} */}
                        <div style={{ "textAlign": "center" }}>
                            price: {item.price}
                    
                            <div>
                                <Button variant="outline-info" className="quantityButtons" onClick={(event) => this.onSelectItem(event,"increment", item)}> + </Button>
                                <Button variant="outline-info" onClick={(event) => this.onSelectItem(event,"decrement", item)}> - </Button> {item.count}
                            </div>
                            {/* <div> <Button onClick={() => this.navigateToCart("Cart")} variant="outline-primary"> ADD TO CART </Button>   </div> */}
                        </div>
                    </div>)
                )
                }
                
                                <div className="pagination-react">
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li onClick={() => this.clickPrevious()} className="page-item"><a className="page-link" href="#">Previous</a></li>
                            {chunks.map((item, index) => {
                                return (<li onClick={() => this.onpaginationClick(index)} class="page-item"> <a class="page-link" href="#">{index + 1}</a></li>
                                )
                            })}
                            <li onClick={() => this.clickNext()} class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                <div style={{ "text-align": "center" }}>
                    <Button onClick={() => this.navigateToCart("Cart")} variant="outline-primary"> ADD TO CART </Button>
                </div>
            </div>);
    }

}

const mapStateToProps = state => {
    return {
        summary: state && state.summary
    }
}

const mapDispatchToProps = actions;
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Trousers);