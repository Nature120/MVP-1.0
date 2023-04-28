export interface IModalChangeImmersionProps {
  setImmersion: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPickers {
  title: string;
  data: string[];
  defaultIndex: number;
  onChange: (index: number) => void;
}
