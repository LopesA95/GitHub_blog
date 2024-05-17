import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h1{
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme['base-Subtitle']};
    }

    p{
      color: ${(props) => props.theme['base-Spam']};
      font-size: 14px;
    }
  }

`
