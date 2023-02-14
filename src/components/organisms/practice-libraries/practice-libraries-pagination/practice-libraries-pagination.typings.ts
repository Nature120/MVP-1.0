import { IPracticeLibrary, TDocument } from '@typings/common';

export interface IPracticeLibrariesPaginationProps extends IPracticeLibrariesPaginationStateProps {
  title: string;
  isWithoutAskModal?: boolean;
}

export interface IPracticeLibrariesPaginationStateProps {
  documentId: string | string[];
  searchField?: keyof IPracticeLibrary;
  setLoading?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

export interface IGetPracticesByFilter {
  searchedDocs: string | string[];
  lastPracticeDoc?: TDocument;
  searchField?: keyof IPracticeLibrary;
}
