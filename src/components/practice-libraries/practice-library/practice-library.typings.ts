export interface IPracticeLibraryProps {
  image: string;
  type: string;
  title: string;
  description: string;
  minuteInterval: {
    from: number;
    to: number;
  };
  tags: string[];
}
