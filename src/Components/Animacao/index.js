import React from "react";
import styled, { keyframes } from "styled-components";
// import {
//   bounceInDown,
//   bounceInLeft,
//   bounceInRight,
//   bounceInUp,
// } from "react-animations";
import FadeInDown from "react-animations/lib/fade-in-down";
import "../Animacao/index.css";


function Animacao1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 900,
      }}
    >
      <div>
        <h1 style={{ font: 1000, fontFamily: 'cursive', backgroundColor: '#000' }}>
          LOADING
        </h1>
      </div>
    </div>
  );
}

export default Animacao1;