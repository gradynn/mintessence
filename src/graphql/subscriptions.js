/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onCreateSubmission(filter: $filter) {
      id
      showcaseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onUpdateSubmission(filter: $filter) {
      id
      showcaseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onDeleteSubmission(filter: $filter) {
      id
      showcaseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateShowcase = /* GraphQL */ `
  subscription OnCreateShowcase($filter: ModelSubscriptionShowcaseFilterInput) {
    onCreateShowcase(filter: $filter) {
      id
      title
      Submissions {
        nextToken
        startedAt
      }
      artistName
      endDate
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateShowcase = /* GraphQL */ `
  subscription OnUpdateShowcase($filter: ModelSubscriptionShowcaseFilterInput) {
    onUpdateShowcase(filter: $filter) {
      id
      title
      Submissions {
        nextToken
        startedAt
      }
      artistName
      endDate
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteShowcase = /* GraphQL */ `
  subscription OnDeleteShowcase($filter: ModelSubscriptionShowcaseFilterInput) {
    onDeleteShowcase(filter: $filter) {
      id
      title
      Submissions {
        nextToken
        startedAt
      }
      artistName
      endDate
      photo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
