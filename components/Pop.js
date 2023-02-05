import React, { useContext, useEffect, useState } from "react";
import WidgetContext from './Context';
import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
export default function Pop(props) {
  const {
    isOpen
  } = useContext(WidgetContext);
  const [status, setStatus] = useState('close');
  useEffect(() => {
    setTimeout(() => {
      setStatus(isOpen ? 'open' : 'close');
    }, 300);
  }, [isOpen]);
  if (!isOpen) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: `whatsapp_widget_pop ${status}`
  }, /*#__PURE__*/React.createElement(Header, props), /*#__PURE__*/React.createElement(Chat, props), /*#__PURE__*/React.createElement(Footer, props));
}