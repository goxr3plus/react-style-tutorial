import React, { Component } from "react";
import "./Expert.css";
import styled from "styled-components";

const pStyle = {
  fontSize: "50px",
  textAlign: "center"
};

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
    background-color: yellow;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

class Expert extends Component {
  render() {
    return (
      <>
        <div style={pStyle}> HALLO INLINE</div>
        <div style={{ textAlign: "center", color: "pink", fontSize: "45px" }}>
          {" "}
          HALLO INLINE PINK{" "}
        </div>
        <div className="pStyle"> HALLO CSS STYLESEET </div>
        <Div>
          <Paragraph>Get started with styled-components 💅</Paragraph>
        </Div>
      </>
    );
  }
}

export default Expert;
