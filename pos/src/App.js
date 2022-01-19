
import React from 'react'
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";
import ProductItem from './components/product/ProductItem.component';
import Monitor from "./components/monitor/Monitor.component"
import "./App.css"
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { products:[] }
  }

  componentDidMount(){
    this.setState({products: [
      { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
      { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
      { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
      { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
      { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
      { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" },
      { productId: 7, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
      { productId: 8, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  ]})
  }

  render(){

    
  return (
        <div className="App">
          <HeaderComponent />
            <Monitor products={this.state.products} />
          <FooterComponent  company="GNext" email="Gnext@gmail.com"/>
        </div>
      );
   }
}

export default App;
