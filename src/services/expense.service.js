import axios from "axios";
import { Axios } from "axios";
import AuthService from "./auth.service";
import { createContext, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const ExpenseContext = createContext();

// Get date objec to retrieve the current month
const today = new Date().getMonth();

export default function ExpenseProvider({ children }) {
  const getUserSummary = async () => {
    const response = await fetch(API_URL + `/expense/summary`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AuthService.getToken()}`,
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };

  const getUserSummaryTwo = () =>
    axios.get(API_URL + `/expense/summary`, {
      headers: {
        Authorization: `Bearer ${AuthService.getToken()}`,
        "Content-Type": "application/json",
      },
    }).then((response) => (response => response.data));

  const getMonthlyExpenses = async () => {
    try {
      const response = await axios.get(API_URL + `/expense/month/${today}`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createExpense = ({ amount, date, description }) =>
    axios
      .post(
        API_URL + "/expense/",
        { amount, date, description },
        { headers: { Authorization: `Bearer ${AuthService.getToken()}` } }
      )
      .then((response) => console.log(response));

  return (
    <ExpenseContext.Provider
      value={{
        getUserSummary,
        getUserSummaryTwo,
        getMonthlyExpenses,
        createExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
