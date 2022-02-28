import React, { useState, useContext, createContext } from "react";

interface HightlightContextProps {
  children: React.ReactNode;
}

const initialValue = {
  hightlight: false,
  setHightlight: () => {},
};

interface HightlightContextType {
  hightlight: boolean;
  setHightlight: (newState: boolean) => void;
}

const HightlightContext = createContext<HightlightContextType>(initialValue);

export default function HightlightProvider({
  children,
}: HightlightContextProps) {
  const [hightlight, setHightlight] = useState(initialValue.hightlight);

  return (
    <HightlightContext.Provider
      value={{
        hightlight,
        setHightlight,
      }}
    >
      {children}
    </HightlightContext.Provider>
  );
}

export function useHightlight() {
  const context = useContext(HightlightContext);

  const { hightlight, setHightlight } = context;

  if (!context) {
    throw new Error("useHightlight deve ser usado em um HightlightProvider");
  }

  return { hightlight, setHightlight };
}
