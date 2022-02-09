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
import { StyledLink } from "../../components/styled-link";
import AuthService from "../../services/auth.service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    const res = await AuthService.login(username, password);
    if (res.status === 200) {
      toast("Login successful", { duration: 6000 });
      navigate("/dashboard");
    } else if (res.status >= 400) {
      toast("Login error", { duration: 5000 });
    }
  };

  return (
    <Container>
      <Toaster />
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldLabel style={{ marginTop: "3em", marginBottom: "0.5em" }}>
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
