import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiRender from './components/ApiRender';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class App extends Component {
  componentDidMount(){
    //var x = 3; // 3 mintues
    // setTimeout(this.props.fetchData(), x*1000);
    // this.props.fetchData();
    this.everyTime = setInterval(() => this.props.fetchData(), 2*1000);
  }
  componentWillUnmount(){
    clearInterval(this.everyTime);
    console.log(this.props)
  }

  render() {
    console.log(this.props.datas);
    return (
      <div className="App">
       <h1> api will render stuff here </h1>
       
       <h3>Buying Price : <small>{this.props.datas.buying_price}</small></h3>
       <h4>Buying Price Fee : <small>{this.props.datas.buying_price_fee}</small> </h4>
       <h3>Buying Price Tax : <small>{this.props.datas.buying_price_tax}</small> </h3>
       <h4>Selling Price : <small>{this.props.datas.selling_price}</small> </h4>
       <h3>Selling Price fees : <small>{this.props.datas.selling_price_fee}</small> </h3>
       <h4>Selling Price Tax: <small>{this.props.datas.selling_price_tax}</small> </h4>
       <h3>Average Price : <small>{this.props.datas.average_price}</small> </h3> 
       
       <hr />
       <pre>
         {JSON.stringify(this.props, null, 2)}
       </pre>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { datas: state.datas };
}

export default connect(mapStateToProps, { fetchData })(App);

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */}