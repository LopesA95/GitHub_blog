import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        </ul>
      </ContentCard>
    </Container>
  )
}
