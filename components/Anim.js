import React from "react";
export default function Anim() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    width: "60",
    height: "60",
    version: "1.1",
    viewBox: "0 0 100 100",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "50",
    r: "6",
    fill: "#999"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    begin: "0.1",
    dur: "1s",
    repeatCount: "indefinite",
    values: "0;1;0"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "26",
    cy: "50",
    r: "6",
    fill: "#999"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    begin: "0.2",
    dur: "1s",
    repeatCount: "indefinite",
    values: "0;1;0"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "50",
    r: "6",
    fill: "#999"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    begin: "0.3",
    dur: "1s",
    repeatCount: "indefinite",
    values: "0;1;0"
  })));
}