import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1.2rem 2rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #0e0e0e;
  font-family: "Abel", sans-serif;
  font-size: 1.3rem;
`;

export const UsernamePlus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PlusLogout = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InfoCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 4rem;
`;

export const DurationButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
`;

export const ReportContainer = styled.div`
  width: 90%;
  height: 40%;
  background-color: black;
  overflow-y: scroll;
  padding: 1rem;
`;

export const NoExpense = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #0e0e0e;
`;
