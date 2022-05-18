import styled from "styled-components";

export const RegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 130px);
  background: linear-gradient(#e66465, #9198e5);
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: auto;
  grid-gap: 20px;
  padding: 40px 0;
  font-family: "Courier New", Courier, monospace;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
`;

export const RegisterHeader = styled.div`
  text-align: center;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
`;

export const RegisterBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 20px;
`;

export const RegisterBtn = styled.div`
  text-align: center;
  background-color: #e66465;
  border-radius: 8px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  :hover {
    background-color: #da3a3a;
  }
  :active {
    background-color: #7e1919;
  }
`;
