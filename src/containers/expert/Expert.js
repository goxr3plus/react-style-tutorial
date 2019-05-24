import React, { Component } from "react";
import "./Expert.css"

const pStyle = {
  fontSize: "50px",
  textAlign: "center"
};

class Expert extends Component {
  render() {
    return (
      <>
        <div style={pStyle}> HALLO </div>
        <div style={{textAlign:"center",color:'pink',fontSize:'45p'}}> HALLO</div>
        <div className="pStyle"> HALLO 2 </div>
      </>
    );
  }
}

export default Expert;
