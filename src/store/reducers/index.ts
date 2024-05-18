import { combineReducers } from 'redux';

import { Issue, Repository, UserProfile } from '../../lib/axios';
import { FETCH_ISSUE_DETAILS, FETCH_REPOSITORY_ISSUES, FETCH_USER_PROFILE, FETCH_USER_REPOSITORIES } from '../actions';

interface UserState {
  userProfile: UserProfile | null;
  userRepositories: Repository[];
  repositoryIssues: Issue[];
  issueDetails: Issue | null;
}

const initialUserState: UserState = {
  userProfile: null,
  userRepositories: [],
  repositoryIssues: [],
  issueDetails: null,
};

const userReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    case FETCH_USER_REPOSITORIES:
      return { ...state, userRepositories: action.payload };
    case FETCH_REPOSITORY_ISSUES:
      return { ...state, repositoryIssues: action.payload };
    case FETCH_ISSUE_DETAILS:
      return { ...state, issueDetails: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
});
