import Logo from "../../components/logo/logo";
import { SubmitButton } from "../login/styles";
import { Container, SubmitButtonContainer } from "./styles";
import { FormField, FormFieldLabel, OtherLink, Form } from "./styles";
import { StyledLink } from "../../components/styled-link";
import { useForm } from "react-hook-form";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const signUpNotification = () => toast("Trying 1 2");

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ username, email, password }) => {
    console.log(`${username} ${email} ${password}`);
    toast("Sign up successful");
    AuthService.register(username, email, password);
    navigate("/login");
  };

  return (
    <Container>
      <Logo />
      <Toaster/>
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
