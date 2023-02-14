import { IPracticeLibrary, ITeacher } from '@typings/common';

export interface IProp {
  teacher: ITeacher;
  featuredPractice: IPracticeLibrary;
  teacherPractices: IPracticeLibrary[];
  isLoading: boolean;
}
