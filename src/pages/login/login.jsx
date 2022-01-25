import Logo from "../../components/logo/logo";
import {
  Container,
  FormField,
  FormFieldLabel,
  OtherLink,
  SubmitButton,
  SubmitButtonContainer,
  Space
} from "./styles";

export default function Login() {
  return (
    <Container>
      <Logo />
      <FormFieldLabel style={{marginTop: "3em", marginBottom: "0.5em"}}>username</FormFieldLabel>
      <FormField type="text"/>
      <FormFieldLabel style={{ marginTop: "0.5em",marginBottom: "0.5em"}}>password</FormFieldLabel>
      <FormField type="text"/>
      <OtherLink>Don't have an account?</OtherLink>
      <SubmitButtonContainer style={{marginTop: "5em"}}>
        <SubmitButton>submit</SubmitButton>
      </SubmitButtonContainer>
    </Container>
  );
}
