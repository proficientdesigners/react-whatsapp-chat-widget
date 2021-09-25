import React from "react";
import CloseBtn from "./CloseBtn";
import HeadPhoneIcon from "./HeadPhoneIcon";
export default function Header(props) {
  const headerIconColor = props.headerIconColor ? props.headerIconColor : 'rgb(100, 100, 100)',
        headerIcon = props.headerIcon ? /*#__PURE__*/React.createElement("img", {
    src: props.headerIcon,
    alt: "chat_logo",
    width: "40"
  }) : /*#__PURE__*/React.createElement(HeadPhoneIcon, {
    headerIconColor: headerIconColor
  }),
        headerIconBgColor = props.headerIconBgColor ? props.headerIconBgColor : 'rgb(255,255,255)',
        headerTxtColor = props.headerTxtColor ? props.headerTxtColor : 'rgb(255,255,255)',
        headerBgColor = props.headerBgColor ? props.headerBgColor : 'rgb(7, 94, 84)',
        headerTitle = props.headerTitle ? props.headerTitle : 'Customer Support',
        headerCaption = props.headerCaption ? props.headerCaption : 'Online';
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: "whatsapp_widget_header",
    style: {
      backgroundColor: headerBgColor,
      color: headerTxtColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_header_close_btn"
  }, /*#__PURE__*/React.createElement(CloseBtn, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_header_icon",
    style: {
      backgroundColor: headerIconBgColor
    }
  }, headerIcon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16
    }
  }, headerTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, headerCaption))));
}