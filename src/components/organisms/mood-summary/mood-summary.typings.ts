export interface IMoodSummaryProps {}

export interface IMoonStat {
  date: Date;
  before: number;
  after: number;
}

export interface IResponseMoon {
  date: Date;
  before?: number[];
  after?: number[];
}
