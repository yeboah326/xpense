import { Container } from "./styles";

export default function Day({ day = 24 }) {
  return (
    <Container>
      <div>{day}</div>
      <hr style={{width:"100%"}} />
    </Container>
  );
}
