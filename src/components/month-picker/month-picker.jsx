import styled from "styled-components";

const MonthSelect = styled.select`
  background-color: white;
  color: black;
  border-radius: 0.3rem;
  width: 6rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Abel';
  font-weight: 400;
`;

export default function MonthPicker({ changeMonth = (f) => f, currentMonth }) {
  return (
    <MonthSelect
      onChange={(e) => changeMonth(e.target.value)}
      defaultValue={currentMonth}
    >
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">Sepetember</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </MonthSelect>
  );
}
