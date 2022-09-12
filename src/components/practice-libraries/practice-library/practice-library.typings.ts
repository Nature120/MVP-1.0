export interface IPracticeLibraryProps {
  image: string;
  type: string;
  title: string;
  description: string;
  duration: {
    from: number;
    to: number;
  };
  tags: string[];
}
