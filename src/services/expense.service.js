import axios from "axios";
import AuthService from "./auth.service";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const API_URL = process.env.REACT_APP_API_URL;

export const ExpenseContext = createContext();

// Get date objec to retrieve the current month

export default function ExpenseProvider({ children }) {
  const today = new Date();

  const navigate = useNavigate();

  async function getUserSummary() {
    try {
      const response = await axios.get(API_URL + `/expense/summary`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        toast("Token expired", { duration: 2000, position: "bottom-center" });
      }
    } catch (error) {
      toast("Token expired", { duration: 2000, position: "bottom-center" });
      navigate("/login");
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
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        toast("Token expired", { duration: 2000, position: "bottom-center" });
      }
    } catch (error) {
      navigate("/login");
    }
  }

  const createExpense = ({ amount, date, description }) => {
    try {
      const response = axios.post(
        API_URL + "/expense/",
        { amount, date, description },
        { headers: { Authorization: `Bearer ${AuthService.getToken()}` } }
      );
      if (response.status === 200) {
        return response;
      } else if (response.status === 401) {
        toast("Token expired", { duration: 2000, position: "bottom-center" });
      }
    } catch (error) {
      toast("Token expired", { duration: 2000, position: "bottom-center" });
      navigate("/login");
    }
  };

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

  async function deleteExpense(id) {
    try {
      const response = await axios.delete(API_URL + `/expense/${id}`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      if (response === 200) {
        navigate("/expense-add");
        navigate("/dashboard");
        return response.data;
      } else if (response.status === 401) {
        toast("Token expired", { duration: 2000, position: "bottom-center" });
      }
    } catch (error) {
      toast("Token expired", { duration: 2000, position: "bottom-center" });
      navigate("/login");
    }
  }

  return (
    <ExpenseContext.Provider
      value={{
        getUserSummary,
        getMonthlyExpenses,
        createExpense,
        deleteExpense,
        months,
        today,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
