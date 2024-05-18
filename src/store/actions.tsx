import { Dispatch } from 'redux';
import { Issue, Repository, UserProfile, api } from '../lib/axios';

export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_REPOSITORIES = 'FETCH_USER_REPOSITORIES';
export const FETCH_REPOSITORY_ISSUES = 'FETCH_REPOSITORY_ISSUES';
export const FETCH_ISSUE_DETAILS = 'FETCH_ISSUE_DETAILS';

export const fetchUserProfile = (username: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get<UserProfile>(`/users/${username}`);
    dispatch({ type: FETCH_USER_PROFILE, payload: response.data });
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};

export const fetchUserRepositories = (username: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get<Repository[]>(`/users/${username}/repos`);
    dispatch({ type: FETCH_USER_REPOSITORIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching user repositories:', error);
  }
};

export const fetchRepositoryIssues = (repository: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get<Issue[]>(`/repos/${repository}/issues`);
    dispatch({ type: FETCH_REPOSITORY_ISSUES, payload: response.data });
  } catch (error) {
    console.error('Error fetching repository issues:', error);
  }
};

export const fetchIssueDetails = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get<Issue>(`/issues/${id}`);
    dispatch({ type: FETCH_ISSUE_DETAILS, payload: response.data });
  } catch (error) {
    console.error('Error fetching issue details:', error);
  }
};
