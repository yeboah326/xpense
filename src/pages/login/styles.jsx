import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem 2rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  background-color: #0e0e0e;
  font-family: "Abel", sans-serif;
  font-size: 1.3rem;
`;

export const Space = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const FormFieldLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const FormFieldLabel = styled.label`
  color: white;
  display: block;
`;

export const FormField = styled.input`
  color: white;
  background-color: #0e0e0e;
  border: 1px solid white;
  padding: 1rem;
  width: 90%;
  height: 1.4rem;
  display: block;
`;

export const OtherLink = styled.a`
  color: white;
  text-decoration: none;
  text-decoration-line: none;
  padding: 0.5rem 0;
`;

export const SubmitButton = styled.button`
  background-color: white;
  font-size: 1rem;
  color: black;
  height: 3rem;
  width: 5rem;
  border: none;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  width: 90%;
  padding-left: 2rem;
  justify-content: end;
`;
