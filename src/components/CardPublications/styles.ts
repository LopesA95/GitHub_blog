<<<<<<< HEAD
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 416px;
  height: 260px;
  display: flex;
  background-color: ${(props) => props.theme['base-Post']};
  flex-direction: column;
  padding: 32px;
  border-radius: 10px;


  > p {
    color: ${(props) => props.theme['base-Text']};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }


  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;

    h1{
      display: flex;
      max-width: 250px;
      width: 100%;
      top: 0;
    }

    p {
      margin-bottom: 28px;
      font-size: 14px;
    }
  }


=======
import styled from "styled-components";

export const Container = styled.div`
  max-width: 416px;
  width: 100%;
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4

`
