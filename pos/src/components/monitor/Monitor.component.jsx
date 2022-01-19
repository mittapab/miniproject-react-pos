import React from 'react'
import ProductList from '../product/ProductList.component';
import Calculate from './Calculate.component';


class Monitor extends React.Component{
    constructor(props){
        super(props);
        this.state = {totalprice: 0 , orders:[]}
    }

    addOrder = (product) =>{
       let findOrder = this.state.orders.find(order => order.product.productId == product.productId)

       if(findOrder){
           findOrder.quantity++;
        }else{
            this.state.orders.push({product:product , quantity: 1})
        }

        const totalprice = this.state.totalprice + parseInt(product.unitPrice)
        this.setState({totalprice:totalprice , orders:this.state.orders})
    }

    render(){

        return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9"><ProductList products={this.props.products} onAddOrder={this.addOrder}/></div>
                <div className="col-md-3"><Calculate totalprice={this.state.totalprice} orders={this.state.orders}/></div>
            </div>

        </div>
        )
    }
}

export default Monitor;