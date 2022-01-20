
import React from 'react'
import HeaderComponent from "./components/Header.component";
import FooterComponent from "./components/Footer.component";
import ProductItem from './components/product/ProductItem.component';
import Monitor from "./components/monitor/Monitor.component"
import axios from 'axios'
import "./App.css"
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { products:[] }
  }

  componentDidMount(){
    axios.get("http://localhost:3001/products").then( res => this.setState({products: res.data}))
    
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
