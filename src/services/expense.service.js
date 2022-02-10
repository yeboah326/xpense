import axios from "axios";
import { Axios } from "axios";
import AuthService from "./auth.service";
import { createContext, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const ExpenseContext = createContext();

// Get date objec to retrieve the current month

export default function ExpenseProvider({ children }) {
  const today = new Date();

  async function getUserSummary() {
    try {
      const response = await axios.get(API_URL + `/expense/summary`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getMonthlyExpenses() {
    try {
      const response = await axios.get(
        API_URL + `/expense/month/${today.getMonth() + 1}`,
        {
          headers: { Authorization: `Bearer ${AuthService.getToken()}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const createExpense = ({ amount, date, description }) =>
    axios
      .post(
        API_URL + "/expense/",
        { amount, date, description },
        { headers: { Authorization: `Bearer ${AuthService.getToken()}` } }
      )
      .then((response) => console.log(response));

  const months = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december",
  };

  return (
    <ExpenseContext.Provider
      value={{
        getUserSummary,
        getMonthlyExpenses,
        createExpense,
        months,
        today,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
