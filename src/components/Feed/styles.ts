import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  margin-bottom: 234px;

  div {
    justify-content: space-between;
    align-items: center;
=======

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4

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
<<<<<<< HEAD
export const HeaderFeed = styled.div`
  margin-bottom: 12px;
  display: flex;
`

export const FeedContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`
=======
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
