<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface IssueCardProps {
  id: number;
  title: string;
  summary: string;
  created_at: string;
}
const getDescription = (text: string) => {
  return text.length > 100 ? `${text.slice(0, 97)}...` : text;
};

const timeSince = (date: string) => {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return "Há " + Math.floor(interval) + " Ano";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return "Há " + Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " dias";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " Horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return "Há " + Math.floor(interval) + " minutos ";
  }
  return Math.floor(seconds) + " seconds ago";
};

// React component
export const CardPublications: React.FC<IssueCardProps> = ({ id, title, summary, created_at }) => {
  return (
    <Container as={Link} to={`/issues/${id}`}>
      <div>
        <h1>{title}</h1>
        <p>{timeSince(created_at)}</p>
      </div>
      <p className="paragraph">{getDescription(summary)}</p>
    </Container>
  );
};
=======
import { Container } from "./styles";

export function CardPubications() {
  return (
    <Container>
      <div>
        <h1>JavaScript data types and data structures</h1>
        <p>Há 1 dia</p>
      </div>
      <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ...</p>
    </Container>
  )
}
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
