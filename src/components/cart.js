import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../action';
import { base } from '../index';

class Cart extends Component{
    constructor() {
        super();
        this.state = {
            order: []
        }
    }

    
        // componentWillMount() {
        //     this.itemsRef = base.syncState('orders', {           //database connection
        //         context: this,
        //         state: 'order'
        //     })};

        //     componentWillUnmount() {
        //         base.removeBinding(this.itemsRef);
        //     }

            calculateCart =()=>{
                let cartTotal = 0;
            //     this.setState({order:this.props.summary},
            //         ()=>{
            //     this.componentWillMount();
            //     }
            // );
                Object.values(this.props.summary).map(item =>{
                    if (item.count > 0) {
                        let itemTotalCost = item.count * item.price;
                        cartTotal =  cartTotal+itemTotalCost;
                    } 
                    
                })
                return cartTotal;
                
            }

            render(){
                return(<div>
               {this.props.summary && Object.values(this.props.summary).map(item =>{
                    return (
                        item.count > 0 ? 
                        <div>
                            <img className="cartImages" src={item.image}/> 
                            <div className="checkoutData">
                                <span className="alignRight">       Rs.{item.price} </span>
                                <span className="alignRight" > Quantity:   {item.count}</span>
                                <span className="alignRight"> TotalPrice: {item.count * item.price}</span>
                            </div> 
                            <div className="clear"></div>
                        </div>  : null 
                        
                        )})
                    
                }
                <div>
                    <div className="cartImages"> </div>
                    <div className="buttonBuy"><button type="button">BUY FOR {this.calculateCart()} </button> 
                    </div>
                </div>
                </div>

                )
            }
        }
        const mapStateToProps = state =>{
            return {
                summary: state && state.summary
            }
        }

        const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);