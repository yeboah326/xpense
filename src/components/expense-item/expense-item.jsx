import { BsX } from "react-icons/bs";
import { Container, AmountDelete } from "./styles";
export default function ExpenseItem({ amount = 20, description = "Food" }) {
  return (
    <Container>
      <AmountDelete>
        <div>GHC {amount}</div>
        <BsX />
      </AmountDelete>
      <div>{description}</div>
    </Container>
  );
}
