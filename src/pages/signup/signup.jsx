import Logo from "../../components/logo/logo";
import { SubmitButton } from "../login/styles";
import { Container, SubmitButtonContainer } from "./styles";
import { FormField, FormFieldLabel, OtherLink } from "./styles";

export default function Signup() {
  return (
    <Container>
      <Logo />
      <FormFieldLabel style={{ marginTop: "3em", marginBottom: "0.5em" }}>
        email
      </FormFieldLabel>
      <FormField type="text" />
      <FormFieldLabel style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        username
      </FormFieldLabel>
      <FormField type="text" />
      <FormFieldLabel style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
        password
      </FormFieldLabel>
      <FormField type="password" />
      <OtherLink hre>Already have an account?</OtherLink>
      <SubmitButtonContainer>
          <SubmitButton>submit</SubmitButton>
      </SubmitButtonContainer>
    </Container>
  );
}
