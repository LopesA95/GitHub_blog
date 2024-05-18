import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 296px;
  background-color: ${props => props.theme["base-Post"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ImgLogo = styled.img`
  width: 140px;
  margin-bottom: 46px;
`

export const EffectImg = styled.img`
  width: 336px;
  height: 100%;
`
