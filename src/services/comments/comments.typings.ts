type TGrade = number | null;

interface IComment {
  grade: TGrade;
  comment: string;
}

export interface ICommentData {
  date: Date;
  after: number[];
  before: number[];
}

export interface IUnformattedCommentData {
  [key: string]: ICommentData;
}

export interface IFullCommentData {
  practiceTitle: string;
  date: Date;
  after: IComment;
  before: IComment;
}

export interface ICommentResponse {
  after: IComment;
  before: IComment;
  date: number;
  practiceTitle: string;
}

export interface IRealTimeCommentsProps {
  uid: string;
  weeksCount: number;
  callback: (commentsData: ICommentData[]) => void;
}
