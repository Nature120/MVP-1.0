import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITeacherState } from './teacher.typings';
import { ITeacher } from '@typings/common';

const initialState: ITeacherState = {
  teachers: null,
};

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    setTeachers: (state, { payload }: PayloadAction<ITeacher[]>) => {
      state.teachers = payload;
    },
  },
});

export const { setTeachers } = teacherSlice.actions;
export const teacherReducer = teacherSlice.reducer;
