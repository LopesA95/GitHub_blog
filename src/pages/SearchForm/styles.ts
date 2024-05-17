import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`
export const InputForm = styled.input`
  height: 50px;
  background-color: ${(props) => props.theme["base-Input"]};
  padding: 12px 16px;
  width: 100%;
  border: 1px solid ${(props) => props.theme["base-Border"]};
  border-radius: 8px;
  color: ${(props) => props.theme["base-Text"]};
  font-size: 16px;
  font-weight: 400;


  &::placeholder{
    color: ${(props) => props.theme["base-Label"]};
    font-size: 16px;
  }

  :focus{
    outline: none;
    border: 1px solid ${(props) => props.theme["blue"]};

  }
`
