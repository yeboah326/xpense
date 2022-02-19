import {
  Container,
  UsernamePlus,
  InfoCards,
  DurationButtonsContainer,
  ReportContainer,
  PlusLogout,
  NoExpense,
} from "./styles";
import InfoCard from "../../components/info-card/info-card";
import { Username } from "../../components/username";
import { AddButton } from "../../components/add-button";
import { DurationButton } from "../../components/duration-button";
import Month from "../../components/month/month";
import { DayExpenseItem } from "../../components/day-expense-item/day-expense-item";
import { useContext, useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { Navigate, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { ExpenseContext } from "../../services/expense.service";
import toast, { Toaster } from "react-hot-toast";
import MonthPicker from "../../components/month-picker/month-picker";

export default function Dashboard() {
  // Get today's date
  const today = new Date();

  const navigate = useNavigate();

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

  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const [allUserExpenses, setAllUserExpenses] = useState({
    january: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    february: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    march: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    april: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    may: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    june: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    july: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    august: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    september: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    october: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    november: [
      {
        days: {},
        total_amount: 0,
      },
    ],
    december: [
      {
        days: {},
        total_amount: 0,
      },
    ],
  });

  const [showAllUserExpenses, setShowAllUserExpenses] = useState(false);

  const [authenticated, setAuthenticated] = useState(
    AuthService.isAuthenticated()
  );
  const {
    getUserSummary,
    getMonthlyExpenses,
    months,
    deleteExpense,
    getAllUserExpenses,
  } = useContext(ExpenseContext);

  const logout = async () => {
    await AuthService.logout();
    setAuthenticated(AuthService.isAuthenticated());
    toast("Logout successful", { duration: 3500, position: "bottom-center" });
  };

  const changeMonth = async (month) => {
    setShowAllUserExpenses(false);
    setCurrentMonth(month);
  };

  const getPageData = async () => {
    if (authenticated) {
      // Get the user summary
      getUserSummary()
        .then(setUserSummary)
        .catch((error) => console.error(error));

      // Get all the current month expenses
      getMonthlyExpenses(currentMonth)
        .then(setMonthlyExpenses)
        .catch((error) => console.error(error));
    }
  };

  const getPageAllUserData = async () => {
    getAllUserExpenses()
      .then(setAllUserExpenses)
      .catch((error) => {
        console.error(error);
      });
  };

  // Perform the various API calls in the useEffect  // Perform the various API calls when the current month changes
  useEffect(() => {
    getPageData();
  }, [currentMonth]);

  useEffect(() => {
    getPageAllUserData();
  }, [showAllUserExpenses]);


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
        <DurationButton
          onClick={() => setShowAllUserExpenses(true)}
        >
          all
        </DurationButton>
        <MonthPicker changeMonth={changeMonth} currentMonth={currentMonth} />
      </DurationButtonsContainer>
      {showAllUserExpenses ? (
        <ReportContainer>
          {allUserExpenses.all_expenses.map((month) => {
            return (
              <>
                <Month
                  month={Object.keys(month)[0]}
                  amount={month[Object.keys(month)[0]][0].total_amount}
                  year={month[Object.keys(month)[0]][0].year}
                />
                {month[Object.keys(month)[0]][0].days.length !== 0 ? (
                  <>
                    {month[Object.keys(month)][0].days.map((day, index) => {
                      return (
                        <>
                          <DayExpenseItem
                            day={Object.keys(day)[0]}
                            expenseItems={Object.values(day)[0]}
                            key={index}
                            deleteExpense={deleteExpense}
                            getPageData={getPageData}
                          />
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <hr style={{ width: "100%" }} />

                    <NoExpense>No Expense</NoExpense>
                  </>
                )}
              </>
            );
          })}
        </ReportContainer>
      ) : (
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
                deleteExpense={deleteExpense}
                getPageData={getPageData}
              />
            );
          })}
        </ReportContainer>
      )}
    </Container>
  ) : (
    <Navigate to={"/login"} />
  );
}
