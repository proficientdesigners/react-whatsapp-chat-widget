import React, { useState } from 'react';
const Context = /*#__PURE__*/React.createContext({});
export function WhatsAppWidgetContextProvider({
  children
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prevState => setIsOpen(!prevState));
  };

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isOpen,
      handleOpen
    }
  }, children);
}
export default Context;