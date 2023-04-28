export interface IRing {
  start: string;
  end: string;
  bg: string;
  theta: number;
  size: number;
}

export interface IDonutProps {
  maxMinutes: number;
  minutes: number;
  addedTime?: number;
  isChangeImmersion?: boolean;
  setImmersion?: React.Dispatch<React.SetStateAction<number>>;
}
