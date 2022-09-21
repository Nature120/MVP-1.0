export interface IPracticeLibraryProps extends IPracticeLibrary {
  isWithoutActions?: boolean;
}

export interface IPracticeLibrary {
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
