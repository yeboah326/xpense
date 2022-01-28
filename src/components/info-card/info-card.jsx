import { Container, Amount, Description } from "./styles";

export default function InfoCard({ amount = 30.21, description = "yesterday" }) {
  return (
    <Container>
      <Amount>GHC {amount}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
