/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onCreateSubmission(filter: $filter, owner: $owner) {
      id
      showcaseID
      photo
      uploadedDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onUpdateSubmission(filter: $filter, owner: $owner) {
      id
      showcaseID
      photo
      uploadedDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
    $owner: String
  ) {
    onDeleteSubmission(filter: $filter, owner: $owner) {
      id
      showcaseID
      photo
      uploadedDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
