import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import { ProfileCard } from "../components/Profile";

export function Home() {
  return (
    <>
      <Header />
      <ProfileCard />
      <Feed />
    </>
  )
}
