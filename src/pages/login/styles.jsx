import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: white;
  background-color: #0e0e0e;
  font-family: "Abel", sans-serif;
  font-size: 1.3em;
`;

export const Space = styled.div`
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
  margin-left: 1.5em;
`;

export const FormField = styled.input`
  color: white;
  background-color: #0e0e0e;
  border: 1px solid white;
  padding: 1em;
  margin-left: 2.3em;
  margin-right: 2.3em;
  width: 80%;
  height: 1.4em;
  display: block;
`;

export const OtherLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5em 0;
  margin-left: 1.5em;
`;

export const SubmitButton = styled.button`
  background-color: white;
  margin-right: 1em;
  color: black;
  height: 2.5em;
  width: 5.3em;
  border: none;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1em;
  width: 100%;
  justify-content: end;
`;
