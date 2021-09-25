import React, { useState, useContext } from "react";
import WidgetContext from './Context';
import Anim from "./Anim";
export default function Chat(props) {
  const {
    isOpen
  } = useContext(WidgetContext);
  const [chatAnim, setChatAnim] = useState(true);
  const date = new Date().toTimeString().slice(0, 5),
        bodyBgColor = props.bodyBgColor ? props.bodyBgColor : 'rgb(227, 220, 213)',
        chatPersonName = props.chatPersonName ? props.chatPersonName : 'Support',
        chatMessage = props.chatMessage ? props.chatMessage : /*#__PURE__*/React.createElement(React.Fragment, null, "Hi there \uD83D\uDC4B ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), " How can I help you?");
  setTimeout(() => {
    isOpen && setChatAnim(false);
  }, 3000);
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: "whatsapp_widget_chat_wrapper",
    style: {
      backgroundColor: bodyBgColor
    }
  }, chatAnim ? /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_bubble_anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_bubble_anim_inner"
  }, /*#__PURE__*/React.createElement(Anim, null))) : /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_chat_wrapper_inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_chat_wrapper_arrow"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.4)'
    }
  }, chatPersonName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#111'
    }
  }, chatMessage), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.4)',
      textAlign: 'end',
      marginTop: 5
    }
  }, date)));
}