import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { UserProfile, getUserProfile } from '../../lib/axios';
import { Container, ContentCard, ProfileImg } from "./styles";

library.add(fab, fas);

interface ProfileProps {
  username: string
}

export const ProfileCard: React.FC<ProfileProps> = ({ username }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    getUserProfile(username).then(data => { setProfile(data) })
  }, [username])

  if (!profile) return <h3>Carregando...</h3>


  return (
    <Container>
      <ProfileImg src={profile.avatar_url} alt={profile.name} />
      <ContentCard>
        <div>
          <h1>{profile.name}</h1>
          <a href={`https://github.com/${username}`} target='_blank'>GITHUB <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} /></a>
        </div>
        <p>{profile.bio}.</p>
        <ul>
          <li><FontAwesomeIcon icon={['fab', 'github']} /><span>{username}</span></li>
          <li><FontAwesomeIcon icon={['fas', 'building']} /><span>{profile.company}</span></li>
          <li><FontAwesomeIcon icon={['fas', 'user-group']} /><span>{profile.followers} seguidores</span></li>
=======
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
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
        </ul>
      </ContentCard>
    </Container>
  )
}
