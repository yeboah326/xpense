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

export const EditDelete = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Label = styled.div`
  font-size: 1.4rem;
`;

export const Value = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
`;
