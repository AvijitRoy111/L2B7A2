 export type TIssueStatus =
  | "open"
  | "in_progress"
   | "resolved";

export type TIssueType =
  | "bug"
  | "feature_request";

export interface IIssue {
  id: number;
  title: string;
  description: string;
//   type: TIssueType;
//   status: TIssueStatus;
//   reporterId: number;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface ICreateIssuePayload {
//   title: string;
//   description: string;
//   type: TIssueType;
// }

// export interface IUpdateIssuePayload {
//   title?: string;
//   description?: string;
//   type?: TIssueType;
//   status?: TIssueStatus;
// }