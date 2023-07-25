"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
  isDataLoading: boolean
}

interface ContextProps {
  isDataLoading: boolean,
  setIsDataLoading: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
  isDataLoading: true,
  setIsDataLoading: (): boolean => true
})

export const GlobalContextProvider = ({ children }: any) => {
  const [isDataLoading, setIsDataLoading] = useState(true);

  return (
    <GlobalContext.Provider value={{ isDataLoading, setIsDataLoading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext);