import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrContext = React.createContext({});
type subTransType = { sign: string; amount: number };
export type TransType = { from: subTransType; to: subTransType };

export const CurrContextProvider = ({ children }: any) => {
  const [currencies, setCurrencies] = React.useState<any>(null);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [transactions, setTransactions] = useState<TransType[] | null>(null);

  const ApiKey = "df0408f52c-c0a886419c-rzquhl";
  const API_URL = `https://api.fastforex.io/fetch-all?from=EUR&api_key=${ApiKey}`;

  const updateTransactions = (newTransact: TransType) => {
    setTransactions((prev) => {
      if (prev) return [...prev, newTransact];

      return [newTransact];
    });
  };

  const convertCurrency = async ({ amount, fromCurrency, toCurrency }) => {
    console.clear();
    console.log({ amount, fromCurrency, toCurrency });
    try {
      const exchangeRate = currencies[toCurrency];
      const convertedValue = (amount * exchangeRate).toFixed(2);

      const newTransact: TransType = {
        from: { sign: fromCurrency, amount },
        to: { sign: toCurrency, amount: +convertedValue },
      };

      updateTransactions(newTransact);
      setConvertedAmount(convertedValue);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.clear();
    axios
      .get(API_URL)
      .then(({ data: { results } }) => {
        console.log(results);
        setCurrencies(results);
      })
      .catch((err) => console.warn(err.message));
  }, []);

  return (
    <CurrContext.Provider
      value={{ convertCurrency, convertedAmount, currencies, transactions }}
    >
      {children}
    </CurrContext.Provider>
  );
};

export const useCurrContext = () => React.useContext(CurrContext);
