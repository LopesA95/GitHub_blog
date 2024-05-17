import efectd from '../../assets/effectd.svg';
import efecte from '../../assets/effecte.svg';
import logo from '../../assets/logo.svg';

import { EffectImg, HeaderContainer, ImgLogo } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <EffectImg src={efecte} alt="" />
      <ImgLogo src={logo} alt="" />
      <EffectImg src={efectd} alt="" />
    </HeaderContainer>
  )
}
