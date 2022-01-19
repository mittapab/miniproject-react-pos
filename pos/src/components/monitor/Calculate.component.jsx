import React from 'react'
import "./Calculate.css"
class Calculate extends React.Component{
    constructor(props){
        super(props);
    }

    showOrder(orders){

    console.log(orders)

    if(!orders || orders.length == 0){
        return <li className="list-item">No product</li>
    }else{

        return orders.map(order => (
            <li key={order.product.productId} className="list-item title mt-2">
             {order.product.productName} (<small>฿ {order.product.unitPrice}</small>) X {order.quantity} = {order.product.unitPrice * order.quantity} <span className="btn-danger btn-custom">X</span>
            </li>
        ))
    }
     
    }
   
    render(){

        const {totalprice , orders} = this.props

        return(
        <div>
            <h3 className="list-item">{totalprice}</h3>
            <hr />
            <ul className="list-unstyled ">
              {this.showOrder(orders)} 
            </ul>
            <hr />
            <button className='btn btn-width btn-success title mt-1'>Confirm</button>
            <button className='btn btn-width btn-danger title mt-1'>Cancle</button>

        </div>
        )
    }
}

export default Calculate;