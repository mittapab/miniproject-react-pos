import React from 'react'

class HeaderComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {date:  new Date()}
        setInterval(() => this.tick() , 1000)

    }

    tick(){  this.setState({date: new Date()}) }

    render(){

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left"><img  src="/images/logo/logo.png"/></div>
                    <div className="col-md-4 text-right" style={{"textAlign": "right"}}><h5 className="mt-4">{this.state.date.toLocaleTimeString()}</h5></div>
                </div>
                
            </div>
        )

    }
   
}

export default HeaderComponent