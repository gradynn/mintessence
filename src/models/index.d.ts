import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubmissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShowcaseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Submission {
  readonly id: string;
  readonly showcaseID: string;
  readonly photo?: string | null;
  readonly uploadedDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Submission, SubmissionMetaData>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission, SubmissionMetaData>) => MutableModel<Submission, SubmissionMetaData> | void): Submission;
}

export declare class Showcase {
  readonly id: string;
  readonly title?: string | null;
  readonly Submissions?: (Submission | null)[] | null;
  readonly artistName?: string | null;
  readonly endDate?: string | null;
  readonly photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Showcase, ShowcaseMetaData>);
  static copyOf(source: Showcase, mutator: (draft: MutableModel<Showcase, ShowcaseMetaData>) => MutableModel<Showcase, ShowcaseMetaData> | void): Showcase;
}