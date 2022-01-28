import {
  Container,
  UsernamePlus,
  InfoCards,
  DurationButtonsContainer,
  ReportContainer,
} from "./styles";
import InfoCard from "../../components/info-card/info-card";
import { Username } from "../../components/username";
import { AddButton } from "../../components/add-button";
import { FaPlus } from "react-icons/fa";
import { DurationButton } from "../../components/duration-button";
import Month from "../../components/month/month";
import Day from "../../components/day/day";
import ExpenseItem from "../../components/expense-item/expense-item";

export default function Dashboard() {
  return (
    <Container>
      <UsernamePlus>
        <Username>username</Username>
        <AddButton>+</AddButton>
      </UsernamePlus>
      <InfoCards>
        <InfoCard />
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
        <ExpenseItem/>
        <Day />
        <Day />
        <Day />
        <Day />

      </ReportContainer>
    </Container>
  );
}
