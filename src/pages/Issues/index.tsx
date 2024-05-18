import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Issue, getIssueDetails } from "../../lib/axios";


type IssueParams = {
  id?: string; // Altere para opcional usando '?'
}

export const Issues = () => {
  const { id } = useParams<IssueParams>();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        if (id) { // Verifique se id não é undefined antes de usar
          const fetchedIssue = await getIssueDetails(id);
          setIssue(fetchedIssue);
        }
      } catch (error) {
        console.error("Error fetching issue:", error);
      }
    };

    fetchIssue();
  }, [id]);

  if (!id || !issue) { // Verifique se id ou issue são undefined antes de renderizar
    return <div>Carregando...</div>
  }

  return (
    <div>
      <Header />
      {/* Renderize os detalhes da issue aqui */}
      <h1>{issue.title}</h1>
      <p>{issue.body}</p>
    </div>
  );
};
