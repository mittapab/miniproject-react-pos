import React from 'react'
import ProductItem from './ProductItem.component';

class ProductList extends React.Component{
    constructor(props){
        super(props);
    }

    showProduct(){
      
              return this.props.products && this.props.products.map( product => (
             <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder} />
            ))
     }

    render(){
        return(
              <div className="row"> 
                {this.showProduct()}
              </div>
              )
    }
}

export default ProductList;