/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission {
    onCreateSubmission {
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission {
    onUpdateSubmission {
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission {
    onDeleteSubmission {
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
export const onCreateShowcase = /* GraphQL */ `
  subscription OnCreateShowcase {
    onCreateShowcase {
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
export const onUpdateShowcase = /* GraphQL */ `
  subscription OnUpdateShowcase {
    onUpdateShowcase {
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
export const onDeleteShowcase = /* GraphQL */ `
  subscription OnDeleteShowcase {
    onDeleteShowcase {
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
