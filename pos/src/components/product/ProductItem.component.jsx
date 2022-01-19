import React from 'react'
import './ProductItem.css'

class ProductItem extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
    const {productName , unitPrice , thumbnail} = this.props.product
   
    return(
        <div className="col-lg-3 mt-1">
            <img className="img-fluid img-thumbnail" src={thumbnail}/>
            <h5 className="mt-1">{productName} <span style={{float: 'right'}}>฿ {unitPrice}</span></h5>
            <button className='btn btn-width btn-primary title mb-1' onClick={()=> this.props.onAddOrder(this.props.product)}>Buy</button>
            
         
        </div>
    )
  }
   

}

export default ProductItem