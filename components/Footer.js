import React from "react";
export default function Footer(props) {
  const footerBgColor = props.footerBgColor ? props.footerBgColor : 'rgb(255, 255, 255)',
        btnTxtColor = props.btnTxtColor ? props.btnTxtColor : 'rgb(255, 255, 255)',
        btnBgColor = props.btnBgColor ? props.btnBgColor : 'rgb(79, 206, 93)',
        phoneNo = props.phoneNo ? props.phoneNo : false;
  return /*#__PURE__*/React.createElement("div", {
    className: "whatsapp_widget_footer",
    style: {
      backgroundColor: footerBgColor
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/${phoneNo}`,
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
  }, "Start Chat"));
}