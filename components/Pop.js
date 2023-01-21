import React, { useContext } from "react";
import WidgetContext from './Context';
import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
export default function Pop(props) {
  const {
    isOpen
  } = useContext(WidgetContext);
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: `whatsapp_widget_pop ${isOpen ? 'open' : 'close'}`
  }, /*#__PURE__*/React.createElement(Header, props), /*#__PURE__*/React.createElement(Chat, props), /*#__PURE__*/React.createElement(Footer, props));
}