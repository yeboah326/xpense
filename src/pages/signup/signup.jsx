import Logo from "../../components/logo/logo";
import { SubmitButton } from "../login/styles";
import { Container, SubmitButtonContainer } from "./styles";
import { FormField, FormFieldLabel, OtherLink, Form } from "./styles";
import { StyledLink } from "../../components/styled-link";
import { useForm } from "react-hook-form";
export default function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel style={{ marginTop: "3em", marginBottom: "0.5em" }}>
          email
        </FormFieldLabel>
        <FormField type="text" {...register("email", { required: true })} />
        <FormFieldLabel style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
          username
        </FormFieldLabel>
        <FormField type="text" {...register("username", { required: true })} />
        <FormFieldLabel style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
          password
        </FormFieldLabel>
        <FormField
          type="password"
          {...register("password", { required: true })}
        />
        <StyledLink to="/login">
          <OtherLink>Already have an account?</OtherLink>
        </StyledLink>
        <SubmitButtonContainer>
          <SubmitButton>submit</SubmitButton>
        </SubmitButtonContainer>
      </Form>
    </Container>
  );
}
