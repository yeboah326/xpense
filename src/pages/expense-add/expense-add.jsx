import {
  Container,
  Form,
  FormField,
  FormFieldLabel,
  Icons,
  SubmitButton,
  SubmitButtonContainer,
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";

export default function ExpenseAdd() {
  return (
    <Container>
      <Icons>
        <FaArrowLeft />
      </Icons>
      <Form>
        <FormFieldLabel style={{ marginBottom: "0.2rem" }}>
          Amount
        </FormFieldLabel>
        <FormField type="number" style={{ marginBottom: "1rem" }} />
        <FormFieldLabel>Date</FormFieldLabel>
        <FormField type="date" style={{ marginBottom: "1rem" }} />
        <FormFieldLabel>Description</FormFieldLabel>
        <FormField type="text" style={{ marginBottom: "1rem" }} />
        <SubmitButtonContainer>
          <SubmitButton>submit</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    </Container>
  );
}
