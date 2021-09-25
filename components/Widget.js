import React from "react";
import Icon from "./Icon";
import Pop from "./Pop";
export default function Widget(props) {
  const dynamicStyles = props.position === 'left' ? {
    alignItems: 'flex-start',
    left: 15
  } : {
    alignItems: 'flex-end',
    right: 15
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_wrapper",
    style: {
      bottom: 15,
      ...dynamicStyles
    }
  }, /*#__PURE__*/React.createElement(Pop, props), /*#__PURE__*/React.createElement(Icon, props));
}