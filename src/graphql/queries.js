/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubmission = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
      id
      photo
      showcaseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        photo
        showcaseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubmissions = /* GraphQL */ `
  query SyncSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        photo
        showcaseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getShowcase = /* GraphQL */ `
  query GetShowcase($id: ID!) {
    getShowcase(id: $id) {
      id
      title
      photo
      endDate
      description
      Submissions {
        nextToken
        startedAt
      }
      artist
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listShowcases = /* GraphQL */ `
  query ListShowcases(
    $filter: ModelShowcaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShowcases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        photo
        endDate
        description
        artist
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncShowcases = /* GraphQL */ `
  query SyncShowcases(
    $filter: ModelShowcaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShowcases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        photo
        endDate
        description
        artist
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
