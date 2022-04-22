import React, { useState } from "react";
export default function Footer(props) {
  const footerBgColor = props.footerBgColor ? props.footerBgColor : 'rgb(245, 245, 245)',
        btnTxt = props.btnTxt ? props.btnTxt : 'Start Chat',
        btnTxtColor = props.btnTxtColor ? props.btnTxtColor : 'rgb(255, 255, 255)',
        btnBgColor = props.btnBgColor ? props.btnBgColor : 'rgb(79, 206, 93)',
        phoneNo = props.phoneNo ? props.phoneNo : false;
  const [message, setMessage] = useState(props.messageBoxTxt ? encodeURI(props.messageBoxTxt) : '');
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: "whatsapp_widget_footer",
    style: {
      backgroundColor: footerBgColor
    }
  }, props.messageBox && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: e => setMessage(encodeURI(e.target.value)),
    className: "whatsapp_widget_input",
    placeholder: "Type a message..",
    defaultValue: props.messageBoxTxt
  })), /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${phoneNo}?text=${message}`,
    onClick: e => {
      if (!phoneNo) {
        e.preventDefault();
        return alert('There is no phone number added to this widget!');
      }
    },
    target: "_blank",
    className: "whatsapp_widget_footer_btn",
    rel: "noreferrer",
    style: {
      color: btnTxtColor,
      backgroundColor: btnBgColor
    }
  }, btnTxt));
}