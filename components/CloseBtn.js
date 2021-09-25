import React, { useContext } from "react";
import WidgetContext from "./Context";
export default function CloseBtn(props) {
  const {
    handleOpen
  } = useContext(WidgetContext);
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    style: {
      cursor: 'pointer'
    },
    onClick: handleOpen
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"
  })));
}