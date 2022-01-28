import { Container, Icons, EditDelete, Label, Value } from "./styles";
import { FaArrowLeft, FaPencilAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
export default function ExpenseView({
  amount = 100.0,
  date = "24/01/2022",
  description = "Food",
}) {
  return (
    <Container>
      <Icons>
        <FaArrowLeft />
        <EditDelete>
          <FaPencilAlt />
          <BsX style={{ fontSize: "2.0rem" }} />
        </EditDelete>
      </Icons>
      <Label>Amount</Label>
      <Value>{amount}</Value>
      <Label>Date</Label>
      <Value>{date}</Value>
      <Label>Description</Label>
      <Value>{description}</Value>
    </Container>
  );
}
