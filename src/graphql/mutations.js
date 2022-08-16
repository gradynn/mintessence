/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
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
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
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
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
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
export const createShowcase = /* GraphQL */ `
  mutation CreateShowcase(
    $input: CreateShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    createShowcase(input: $input, condition: $condition) {
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
export const updateShowcase = /* GraphQL */ `
  mutation UpdateShowcase(
    $input: UpdateShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    updateShowcase(input: $input, condition: $condition) {
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
export const deleteShowcase = /* GraphQL */ `
  mutation DeleteShowcase(
    $input: DeleteShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    deleteShowcase(input: $input, condition: $condition) {
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
