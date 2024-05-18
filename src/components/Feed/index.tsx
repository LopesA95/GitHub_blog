<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Issue, getRepositoryIssues, getUserRepositories } from '../../lib/axios';
import { CardPublications } from '../CardPublications';
import { SearchForm } from '../SearchForm';
import { Container, FeedContent, HeaderFeed } from './styles';

interface FeedProps {
  username: string;
}

export const Feed: React.FC<FeedProps> = ({ username }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError('');
      try {
        const repos = await getUserRepositories(username);
        const issuesPromises = repos.map(repo => getRepositoryIssues(repo.full_name));
        const issuesResults = await Promise.all(issuesPromises);
        const combinedIssues = issuesResults.flat();
        setIssues(combinedIssues);
      } catch (err) {
        setError('Failed to fetch issues');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchIssues();
    }
  }, [username]);

  return (
    <Container>
      <HeaderFeed>
        <h1>Publicações</h1>
        <p>{issues.length} publicações</p>
      </HeaderFeed>
      <SearchForm />
      {loading ? (
        <p>Loading issues...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <FeedContent>
          {issues.map(issue => (
            <li key={issue.id}>
              <CardPublications
                id={issue.id}
                title={issue.title}
                summary={issue.body}
                created_at={issue.created_at}
              />
            </li>
          ))}
        </FeedContent>
      )}
    </Container>
  );
};
=======
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
>>>>>>> 42fe11b34544c630602e72658e20c63c6771d0a4
