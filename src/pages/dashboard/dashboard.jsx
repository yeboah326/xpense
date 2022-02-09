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

  const [authenticated, setAuthenticated] = useState(
    AuthService.isAuthenticated()
  );
  const { getUserSummary, getUserSummaryTwo, getMonthlyExpenses } =
    useContext(ExpenseContext);
  const [userSummary, setUserSummary] = useState();

  const logout = async () => {
    await AuthService.logout();
    setAuthenticated(AuthService.isAuthenticated());
    toast("Logout successful", { duration: 3500, position: "bottom-center" });
  };

  useEffect(() => {
    setUserSummary(getUserSummaryTwo());
  }, []);

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
        <InfoCard amount={userSummary} />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </InfoCards>
      <DurationButtonsContainer>
        <DurationButton>all</DurationButton>
        <DurationButton>month</DurationButton>
      </DurationButtonsContainer>
      <ReportContainer>
        <Month />
        <Day />
        <ExpenseItem />
        <Day />
        <Day />
        <Day />
        <Day />
      </ReportContainer>
    </Container>
  ) : (
    <Navigate to={"/login"} />
  );
}
