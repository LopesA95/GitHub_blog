import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 234px;

  div {
    justify-content: space-between;
    align-items: center;

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
export const HeaderFeed = styled.div`
  margin-bottom: 12px;
  display: flex;
`

export const FeedContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`
