import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ContentCard, ProfileImg } from "./styles";

library.add(fab, fas); // Adicione 'fas' aqui

export function ProfileCard() {
  return (
    <Container>
      <ProfileImg src="https://picsum.photos/148/148" alt="" />
      <ContentCard>
        <div>
          <h1>Anderson Lopes</h1>
          <a href="#">GITHUB <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} /></a>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, iusto aliquam blanditiis quos officia natus, distinctio, quo maiores perspiciatis impedit cumque excepturi nihil. Nesciunt ipsa quia aperiam adipisci obcaecati at.</p>
        <ul>
          <li><FontAwesomeIcon icon={['fab', 'github']} /><span>lopeasA95</span></li>
          <li><FontAwesomeIcon icon={['fas', 'building']} /><span>Rocketseat</span></li>
          <li><FontAwesomeIcon icon={['fas', 'user-group']} /><span>32 seguidores</span></li>
        </ul>
      </ContentCard>
    </Container>
  )
}
