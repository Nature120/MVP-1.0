import { useEffect, useState } from 'react';

import { useAppSelector } from './redux';

import { teacherInstance } from '@services/api.service';

import { ITeacher } from '@typings/common';

export const useTeacherHook = (teacherName?: string) => {
  const [teacher, setTeacher] = useState<ITeacher>({} as ITeacher);
  const getTeachers = useAppSelector(state => state.teachers.teachers);

  useEffect(() => {
    if (!teacherName) {
      return;
    }
    getTeacherByName(teacherName);
  }, []);

  const getTeacherByName = async (name: string) => {
    if (!getTeachers) {
      const response = await teacherInstance(teacherName as string).get();
      const data = response.data() as ITeacher;
      setTeacher(data);
      return;
    }

    return getTeachers?.find(coach => {
      const isMatchedTeacher = coach.fullName.toLowerCase().includes(name.toLowerCase());
      isMatchedTeacher && setTeacher(coach);
      return;
    });
  };
  return { teacher };
};
