import styled from "styled-components";

// header part

export const HeaderPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  top: 0;
  position: sticky;
  width: 100%;
  height: 80px;
  background-color: #e66465;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.5);
`;

export const HeaderLogoPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

export const HeaderLinkpart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

// footer part

export const FooterPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  width: 100%;
  height: 50px;
  background-color: #9198e588;
`;
