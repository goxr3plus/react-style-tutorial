import React, { Component } from "react";
import "./Expert.css";
import styled from "styled-components";
import expert from "./Expert.module.css"

/* Inline Style */
const pStyle = {
  fontSize: "50px",
  textAlign: "center"
};

/* Styled Components */
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
        {/*  Inline Style  */}
        <div style={pStyle}> HALLO INLINE</div>
        {/*  Inline Style 2  */}
        <div style={{ textAlign: "center", color: "pink", fontSize: "45px" }}>  HALLO INLINE PINK{" "}</div>
        <hr></hr>
        {/* External StyleSheet  */}
        <div className="pStyle"> HALLO CSS STYLESEET </div>
        <hr></hr>
        {/* Styled Components */}
        <Div> <Paragraph>Get started with styled-components 💅</Paragraph></Div>
        <hr></hr>
        {/* CSS Modules */}
        <div className={expert.pStyle}> CSS MODULE CSS </div>
      </>
    );
  }
}

export default Expert;
