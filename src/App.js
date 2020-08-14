import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Content from './Components/Content';


class App extends React.Component {
  render(){
  return (
    <React.Fragment>
    <div className="wrapper">
      <div className="App">
        <div className="div1">
          <Navbar />
        </div>
        <div className="div2">
          <Header />
          <Content />
        </div>
        <div className="div3" >
          <Footer />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
}
export default App;
