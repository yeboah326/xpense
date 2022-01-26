import Logo from "../../components/logo/logo";
import {
  Container,
  FormField,
  FormFieldLabel,
  OtherLink,
  SubmitButton,
  SubmitButtonContainer,
  Form,
} from "./styles";
import { Link } from "react-router-dom";
import { StyledLink } from "../../components/styled-link";
export default function Login() {
  return (
    <Container>
      <Logo />
      <Form>
        <FormFieldLabel style={{ marginTop: "3em", marginBottom: "0.5em" }}>
          username
        </FormFieldLabel>
        <FormField type="text" />
        <FormFieldLabel style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
          password
        </FormFieldLabel>
        <FormField type="text" />
        <StyledLink to="/signup">
          <OtherLink>Don't have an account?</OtherLink>
        </StyledLink>
        <SubmitButtonContainer style={{ marginTop: "5em" }}>
          <SubmitButton>submit</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    </Container>
  );
}
