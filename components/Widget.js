import React, { useContext, useEffect } from "react";
import WidgetContext from './Context';
import Icon from "./Icon";
import Pop from "./Pop";
export default function Widget(props) {
  const {
    handleOpen
  } = useContext(WidgetContext);
  const dynamicStyles = props.position === 'left' ? {
    alignItems: 'flex-start',
    left: 15
  } : {
    alignItems: 'flex-end',
    right: 15
  },
        autoOpen = props.autoOpen ? props.autoOpen : false,
        autoOpenTimer = props.autoOpenTimer ? props.autoOpenTimer : 3000;
  useEffect(() => {
    if (autoOpen) {
      setTimeout(handleOpen, autoOpenTimer);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [autoOpen, autoOpenTimer]);
  return /*#__PURE__*/React.createElement("div", {
    key: props,
    className: "whatsapp_widget_wrapper",
    style: {
      bottom: 15,
      ...dynamicStyles
    }
  }, /*#__PURE__*/React.createElement(Pop, props), /*#__PURE__*/React.createElement(Icon, props));
}