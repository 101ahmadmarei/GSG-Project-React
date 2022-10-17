import React, { useState } from "react";

const DescriptionContext = React.createContext({
  showCard: false,
  idCard: null,
  openCard: () => {},
  closeCard: () => {},
});

export const CardContextProvider = (props) => {
  const [showCard, setShowCard] = useState(false);
  const [idCard, setIdCard] = useState(null);
  const openCardHandler = (event) => {
    setShowCard(true);
    setIdCard(event.target.id);
  };
  const closeCardHandler = (token, expirationTime) => {
    setShowCard(false);
  };
  const contextValue = {
    showCard: showCard,
    idCard: idCard,
    openCard: openCardHandler,
    closeCard: closeCardHandler,
  };
  return (
    <DescriptionContext.Provider value={contextValue}>
      {props.children}
    </DescriptionContext.Provider>
  );
};

export default DescriptionContext;
