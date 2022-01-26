import { Container } from "./styles";

export default function Month({
  month = "january",
  year = "2022",
  amount = "20",
}) {
  return (
    <Container>
      <div>
        {month}, {year}
      </div>
      <div>
          GHC {amount}
      </div>
    </Container>
  );
}
