import React from 'react'
import ProductList from '../product/ProductList.component';
import Calculate from './Calculate.component';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



class Monitor extends React.Component{
    constructor(props){
        super(props);
        this.state = {totalprice: 0 , orders:[] , msg: false}
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

    delOrder = (product) => {
       let findOrder = this.state.orders.find(order => order.product.productId ===  product.productId)
       let resultOrder = this.state.orders.filter(order => order.product.productId !==  product.productId)
       const totalprice = this.state.totalprice - (findOrder.quantity * parseInt(findOrder.product.unitPrice ))
       this.setState({totalprice: totalprice , orders: resultOrder})


 
    }

    cancleOrder = () => {
        this.setState({totalprice: 0 , orders:[]})
    }

    confirmOrder = () => {
        const{totalpric , orders} = this.state;
        axios.post("http://localhost:3001/orders" , {orderDate: new Date() , totalpric , orders }).then( res => {
             this.setState({totalprice: 0 , orders:[] })  
             this.showAlert()
            
            
            })
    }

    showAlert(){
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: <strong>บันทึกรายการสำเร็จ</strong>,
          html: <i>บันทีกรายการสั่งซื้อสำเร็จ</i>,
          icon: 'success'
        })
      }

    render(){

        return(
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9"><ProductList products={this.props.products} onAddOrder={this.addOrder}/></div>
                <div className="col-md-3"><Calculate totalprice={this.state.totalprice} onDelOrder={this.delOrder} orders={this.state.orders} onCancle={this.cancleOrder} onConfirm={this.confirmOrder}/></div>
            </div>

        </div>
        )
    }
}

export default Monitor;