import React, { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const CurrContext = React.createContext({});
type subTransType = [number, string]; // [amount, sign]
export type TransType = {
  from: subTransType;
  to: subTransType;
  date: string;
  id?: string;
};

export const CurrContextProvider = ({ children }: any) => {
  const [currencies, setCurrencies] = React.useState<any>(null);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<TransType[] | any[] | null>(
    null
  );

  const ApiKey = "df0408f52c-c0a886419c-rzquhl";
  const API_URL = `https://api.fastforex.io/fetch-all?from=EUR&api_key=${ApiKey}`;
  const transactionsCollectionRef = collection(db, "Transactions/");

  const getTime = () =>
    new Date().toLocaleTimeString() + " " + new Date().toDateString();

  const getSnapShot = () => {
    onSnapshot(transactionsCollectionRef, (snapshot) => {
      const arrayRes = [];

      snapshot.forEach((doc) => arrayRes.push({ ...doc.data(), id: doc.id }));

      setTransactions([...arrayRes]);
    });
  };

  const updateTransactions = (newTransact: TransType) => {
    // upload new transaction to firebase
    setLoading(true);
    const transactionsCollectionRef = collection(db, "Transactions/");

    addDoc(transactionsCollectionRef, { ...newTransact })
      .then(() => getSnapShot())
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const convertCurrency = async ({ amount, fromCurrency, toCurrency }) => {
    try {
      const exchangeRate = currencies[toCurrency];
      const convertedValue = (amount * exchangeRate).toFixed(2);

      const newTransact: TransType = {
        from: [amount, fromCurrency],
        to: [+convertedValue, toCurrency],
        date: getTime(), // like '12:32:49 PM Thu Aug 24 2023'
      };

      updateTransactions(newTransact);
      setConvertedAmount(convertedValue);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = (id: string) => {
    setLoading(true);
    const transacDoc = doc(db, "Transactions/", id);
    deleteDoc(transacDoc)
      .then(() => getSnapShot())
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => setCurrencies(results))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const getTransaction = async () => {
      try {
        const { docs } = await getDocs(transactionsCollectionRef);

        const filtereredData = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTransactions(filtereredData);
      } catch (err) {
        console.error(err);
      }
    };

    getTransaction();
  }, [])

  return (
    <CurrContext.Provider
      value={{
        convertCurrency,
        convertedAmount,
        currencies,
        transactions,
        loading,
        deleteData,
      }}
    >
      {children}
    </CurrContext.Provider>
  );
};

export const useCurrContext = () => React.useContext(CurrContext);
