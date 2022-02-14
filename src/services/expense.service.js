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
        toast("Token expired", { duration: 1500, position: "bottom-center" });
      }
    } catch (error) {
      toast("Token expired", { duration: 1500, position: "bottom-center" });
      navigate("/login");
    }
  }

  async function getMonthlyExpenses(currentMonth = today.getMonth() + 1) {
    try {
      const response = await axios.get(
        API_URL + `/expense/month/${currentMonth}`,
        {
          headers: { Authorization: `Bearer ${AuthService.getToken()}` },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        toast("Token expired", { duration: 1500, position: "bottom-center" });
      }
    } catch (error) {
      navigate("/login");
    }
  }

  const createExpense = async ({ amount, date, description }) => {
    try {
      const response = await axios.post(
        API_URL + "/expense/",
        { amount, date, description },
        { headers: { Authorization: `Bearer ${AuthService.getToken()}` } }
      );
      if (response.status === 201) {
        toast("Expense created successfully", {
          duration: 3000,
          position: "bottom-center",
        });
        navigate("/dashboard");
        return response;
      }
    } catch (error) {
      console.error(error);
      toast("Token expired", { duration: 1500, position: "bottom-center" });
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

  async function deleteExpense(id, getPageData) {
    try {
      const response = await axios.delete(API_URL + `/expense/${id}`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      if (response.status === 200) {
        toast("Expense deleted successfully", {
          duration: 1200,
          position: "bottom-center",
        });
        navigate("/dashboard");
        return response.data;
      }
    } catch (error) {
      console.error(error);
      toast("Token expired", { duration: 1500, position: "bottom-center" });
      navigate("/login");
    }
  }

  async function getExpense(id) {
    try {
      const response = await axios.get(API_URL + `/expense/${id}`, {
        headers: { Authorization: `Bearer ${AuthService.getToken()}` },
      });
      if (response.status === 200) {
        return response.data;
      }
      if (response.status === 404) {
        toast("Expense does not exist", {
          duration: 1500,
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast("Token expired", { duration: 1500, position: "bottom-center" });
      navigate("/login");
    }
  }

  async function editExpense({ amount, date, description, id, getPageData }) {
    try {
      const response = await axios.put(
        API_URL + `/expense/${id}`,
        { amount, date, description },
        {
          headers: { Authorization: `Bearer ${AuthService.getToken()}` },
        }
      );
      if (response.status === 200) {
        toast("Expense edited successfully", {
          duration: 1500,
          position: "bottom-center",
        });
        getPageData();
        return response.data;
      } else if (response.status === 404) {
        toast("Expense does not exist", {
          duration: 1500,
          position: "bottom-center",
        });
      }
    } catch (error) {
      toast("Token expired", { duration: 1500, position: "bottom-center" });
      console.error(error);
    }
  }

  return (
    <ExpenseContext.Provider
      value={{
        getUserSummary,
        getMonthlyExpenses,
        createExpense,
        deleteExpense,
        getExpense,
        editExpense,
        months,
        today,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
