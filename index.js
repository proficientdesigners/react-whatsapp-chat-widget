function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { WhatsAppWidgetContextProvider } from "./components/Context";
import Widget from './components/Widget';
export default function WhatsAppWidget(props) {
  return /*#__PURE__*/React.createElement(WhatsAppWidgetContextProvider, null, /*#__PURE__*/React.createElement(Widget, _extends({
    key: props
  }, props)));
}