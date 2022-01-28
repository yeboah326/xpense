import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1.2rem 2rem;
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

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
`;

export const Form = styled.form`
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