import {
  Container,
  Form,
  FormField,
  FormFieldLabel,
  Icons,
  SubmitButton,
  SubmitButtonContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { ExpenseContext } from "../../services/expense.service";
import { Toaster } from "react-hot-toast";

export default function ExpenseAdd() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { createExpense } = useContext(ExpenseContext);

  const onSubmit = async ({ amount, date, description }) => {
    console.log(amount, date, description);
    createExpense({ amount, date, description });
  };
  return (
    <Container>
      <Toaster/>
      <Icons>
        <FaArrowLeft onClick={() => navigate("/dashboard")} />
      </Icons>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel style={{ marginBottom: "0.2rem" }}>
          Amount
        </FormFieldLabel>
        <FormField
          type="number"
          step={0.01}
          style={{ marginBottom: "1rem" }}
          {...register("amount", { required: true })}
        />
        <FormFieldLabel>Date</FormFieldLabel>
        <FormField
          type="date"
          style={{ marginBottom: "1rem" }}
          {...register("date", { required: true })}
        />
        <FormFieldLabel>Description</FormFieldLabel>
        <FormField
          type="text"
          style={{ marginBottom: "1rem" }}
          {...register("description", { required: true })}
        />
        <SubmitButtonContainer>
          <SubmitButton>submit</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    </Container>
  );
}
