import ExpenseItem from "../expense-item/expense-item";
import Day from "../day/day";
export function DayExpenseItem({day, expenseItems}) {
  return (
    <>
      <Day day={day} />
      {expenseItems.map((expense, index) => (
        <ExpenseItem
          amount={expense.amount}
          description={expense.description}
          key={index}
        />
      ))}
    </>
  );
}
