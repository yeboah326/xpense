import { DayContainer, ExpenseContainer, AmountDelete } from "./styles";
import { BsX } from "react-icons/bs";

export function DayExpenseItem({ day, expenseItems, deleteExpense }) {

  return (
    <>
      <DayContainer>
        <div>{day}</div>
        <hr style={{ width: "100%" }} />
      </DayContainer>
      {expenseItems.map((expense) => (
        <ExpenseContainer>
          <AmountDelete>
            <div>GHC {expense.amount}</div>
            <BsX onClick={() => deleteExpense(expense.id)}/>
          </AmountDelete>
          <div>{expense.description}</div>
        </ExpenseContainer>
      ))}
    </>
  );
}
