import { SearchForm } from "../../pages/SearchForm";
import { Container } from "./styles";

export function Feed() {
  return (
    <Container>
      <div>
        <h1>Publicações</h1>
        <p>6 publicações</p>
      </div>
      <SearchForm />
    </Container>

  )
}
