import React from "react";

import styled from "styled-components";

const StyledInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  color: #3b3f5c;
  width: 350px;
  margin: 10px 0;
  padding: 12px 15px;
  outline: none;
  border-radius: 5px;
  border: none;
`;

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
