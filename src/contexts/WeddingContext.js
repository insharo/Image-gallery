import React, { createContext, useContext, useState } from "react";

export const WeddingContext = createContext();

export function useWedding() {
  return useContext(WeddingContext);
}

export const WeddingProvider = ({ children }) => {
  const [code, setCode] = useState("");

  return (
    <WeddingContext.Provider
      value={{
        code,
        setCode,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
