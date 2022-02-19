import {
  Container,
  Icons,
  EditDelete,
  Label,
  Value,
  Form,
  FormField,
  FormFieldLabel,
  SubmitButtonContainer,
  SubmitButton,
} from "./styles";
import { FaArrowLeft, FaPencilAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ExpenseContext } from "../../services/expense.service";
import { useContext } from "react";
import AuthService from "../../services/auth.service";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

export default function ExpenseView() {
  const navigate = useNavigate();

  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const [expense, setExpense] = useState({
    amount: 0,
    date: "2019-08-24",
    description: "string",
    id: 0,
    user_id: 0,
  });

  const [authenticated, setAuthenticated] = useState(
    AuthService.isAuthenticated()
  );

  const { getExpense, deleteExpense, editExpense } = useContext(ExpenseContext);

  const [editExpenseBool, setEditExpenseBool] = useState(true);

  const onSubmit = async ({ amount, date, description }) => {
    editExpense({
      amount,
      date,
      description,
      id: location.state.id,
      getPageData,
    });
    setEditExpenseBool(!editExpenseBool);
  };

  const getPageData = async () => {
    getExpense(location.state.id)
      .then(setExpense)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (authenticated) {
      getPageData();
    }
  }, []);

  return (
    <Container>
      <Toaster />
      <Icons>
        <FaArrowLeft onClick={() => navigate("/dashboard")} />
        <EditDelete>
          <FaPencilAlt onClick={() => setEditExpenseBool(!editExpenseBool)} />
          <BsX
            style={{ fontSize: "2.0rem" }}
            onClick={() =>
              deleteExpense(expense.id, location.state.getPageData)
            }
          />
        </EditDelete>
      </Icons>
      {editExpenseBool ? (
        <>
          <Label>Amount</Label>
          <Value>{expense.amount}</Value>
          <Label>Date</Label>
          <Value>{expense.date}</Value>
          <Label>Description</Label>
          <Value>{expense.description}</Value>
        </>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldLabel style={{ marginBottom: "1rem" }}>
            Amount
          </FormFieldLabel>
          <FormField
            type="number"
            defaultValue={expense.amount}
            {...register("amount", { required: true })}
          />
          <FormFieldLabel style={{ marginBottom: "1rem", marginTop: "1rem" }}>
            Date
          </FormFieldLabel>
          <FormField
            type="date"
            defaultValue={expense.date}
            {...register("date", { required: true })}
          />
          <FormFieldLabel style={{ marginBottom: "1rem", marginTop: "1rem" }}>
            Description
          </FormFieldLabel>
          <FormField
            type="text"
            defaultValue={expense.description}
            {...register("description", { required: true })}
          />
          <SubmitButtonContainer>
            <SubmitButton>submit</SubmitButton>
          </SubmitButtonContainer>
        </Form>
      )}
    </Container>
  );
}
