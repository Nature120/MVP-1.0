export interface IPracticeLibrariesPaginationProps extends IPracticeLibrariesPaginationStateProps {
  title: string;
}

export interface IPracticeLibrariesPaginationStateProps {
  documentId: string | string[];
  setLoading?: React.Dispatch<React.SetStateAction<any>>;
}
