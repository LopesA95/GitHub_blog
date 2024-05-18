import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: -6rem;
  border-radius: 10px;
<<<<<<< HEAD
=======

>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
  margin-bottom: 80px;

  background-color: ${(props) => props.theme["base-Profile"]};
  height: 212px;
`
export const ProfileImg = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin: 32px 32px 32px 40px;
`
export const ContentCard = styled.div`
  display: flex;
<<<<<<< HEAD
  width: 100%;
=======
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
  flex-direction: column;
  justify-content: center;
  margin: 32px 32px 32px 0;


  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h1{
      font-size: 24px;
      color: ${(props) => props.theme["base-Title"]};
    }

    a {
    font-size: 16px;
    color: ${(props) => props.theme["blue"]};
    font-weight: bold;
    position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: ${(props) => props.theme["blue"]};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
      svg{
        width: 12px;
        height: 12px;
        margin-left: 8px;
      }
    }
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme["base-Text"]};
    line-height: 160%;
    text-align: justify;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 24px;
    column-gap: 24px;

      svg {
        width: 16px;
        height: 16px;
        color: ${(props) => props.theme["base-Label"]};
      }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 16px;
        color: ${(props) => props.theme["base-Subtitle"]};
        margin-left: 8px;
      }
    }
  }
`
