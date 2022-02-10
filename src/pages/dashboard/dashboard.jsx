import {
  Container,
  UsernamePlus,
  InfoCards,
  DurationButtonsContainer,
  ReportContainer,
  PlusLogout,
} from "./styles";
import InfoCard from "../../components/info-card/info-card";
import { Username } from "../../components/username";
import { AddButton } from "../../components/add-button";
import { DurationButton } from "../../components/duration-button";
import Month from "../../components/month/month";
import { DayExpenseItem } from "../../components/day-expense-item/day-expense-item";
import Day from "../../components/day/day";
import ExpenseItem from "../../components/expense-item/expense-item";
import { useContext, useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { Navigate, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { ExpenseContext } from "../../services/expense.service";
import toast, { Toaster } from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  // Set initial state for the user summary
  const [userSummary, setUserSummary] = useState({
    today: 0.0,
    seven_days: 0.0,
    thirty_days: 0.0,
    sixty_days: 0.0,
  });

  // Set initial state for the monthly expense
  const [monthlyExpenses, setMonthlyExpenses] = useState({
    expenses: [],
    expenses_total_sum: 0.0,
  });

  const [authenticated, setAuthenticated] = useState(
    AuthService.isAuthenticated()
  );
  const { getUserSummary, getMonthlyExpenses, months, today } =
    useContext(ExpenseContext);

  const logout = async () => {
    await AuthService.logout();
    setAuthenticated(AuthService.isAuthenticated());
    toast("Logout successful", { duration: 3500, position: "bottom-center" });
  };

  // Perform the various API calls in the useEffect
  useEffect(() => {
    if (authenticated) {
      // Get the user summary
      getUserSummary()
        .then(setUserSummary)
        .catch((error) => console.error(error));

      // Get all the current month expenses
      getMonthlyExpenses()
        .then(setMonthlyExpenses)
        .catch((error) => console.error(error));

      console.log(monthlyExpenses);
    }
  }, [authenticated, API_URL]);

  return authenticated ? (
    <Container>
      <Toaster />
      <UsernamePlus>
        <Username>{JSON.parse(localStorage.getItem("user")).username}</Username>
        <PlusLogout>
          <AddButton onClick={() => navigate("/expense-add")}>+</AddButton>
          <AddButton onClick={logout}>
            <BiLogOut />
          </AddButton>
        </PlusLogout>
      </UsernamePlus>
      <InfoCards>
        <InfoCard description="today" amount={userSummary.today} />
        <InfoCard description="seven days" amount={userSummary.seven_days} />
        <InfoCard description="thirty days" amount={userSummary.thirty_days} />
        <InfoCard description="sixty days" amount={userSummary.sixty_days} />
      </InfoCards>
      <DurationButtonsContainer>
        <DurationButton>all</DurationButton>
        <DurationButton>month</DurationButton>
      </DurationButtonsContainer>
      <ReportContainer>
        <Month
          month={months[monthlyExpenses.month_index]}
          amount={monthlyExpenses.expenses_total_sum}
          year={monthlyExpenses.year}
        />
        {monthlyExpenses.expenses.map((day, index) => {
          return (
            <DayExpenseItem
              day={Object.keys(day)[0]}
              expenseItems={Object.values(day)[0]}
              key={index}
            />
          );
        })}
      </ReportContainer>
    </Container>
  ) : (
    <Navigate to={"/login"} />
  );
}
