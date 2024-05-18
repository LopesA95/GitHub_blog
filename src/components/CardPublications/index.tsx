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
