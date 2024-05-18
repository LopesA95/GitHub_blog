import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/Profile";

export function Home() {
  const username = "lopesa95"
  return (
    <>
      <Header />
      <ProfileCard username={username} />
      <Feed username={username} />
    </>
  );
}
