import React, { useState, useContext, createContext, ReactNode } from "react";

interface HighlightContextProps {
  children: ReactNode;
}

const initialValue = {
  highlight: false,
  setHighlight: () => {},
};

interface HighlightContextType {
  highlight: boolean;
  setHighlight: (newState: boolean) => void;
}

const HighlightContext = createContext<HighlightContextType>(initialValue);

export default function HighlightProvider({ children }: HighlightContextProps) {
  const [highlight, setHighlight] = useState(initialValue.highlight);

  return (
    <HighlightContext.Provider
      value={{
        highlight,
        setHighlight,
      }}
    >
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  const context = useContext(HighlightContext);

  const { highlight, setHighlight } = context;

  if (!context) {
    throw new Error("useHighlight deve ser usado em um HighlightProvider");
  }

  return { highlight, setHighlight };
}
