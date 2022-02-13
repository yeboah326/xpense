import { DayContainer, ExpenseContainer, AmountDelete } from "./styles";
import { useNavigate } from "react-router-dom";

export function DayExpenseItem({
  day,
  expenseItems,
  getPageData,
}) {
  const navigate = useNavigate();
  
  return (
    <>
      <DayContainer>
        <div>{day}</div>
        <hr style={{ width: "100%" }} />
      </DayContainer>
      {expenseItems.map((expense) => (
        <ExpenseContainer
          key={expense.id}
          onClick={() => navigate("/expense-view", {state: {id: expense.id}})}
        >
          <AmountDelete>
            <div>GHC {expense.amount}</div>
          </AmountDelete>
          <div>{expense.description}</div>
        </ExpenseContainer>
      ))}
    </>
  );
}
