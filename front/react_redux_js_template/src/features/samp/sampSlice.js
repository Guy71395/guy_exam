import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStudents,addStudents,delStudent,addScore } from './sampAPI';

const initialState = {
  students:[],
  update:false
};

export const getStudentsAsync = createAsyncThunk(
  'samp/getStudents',
  async () => {
    const response = await getStudents();
    return response;
  }
);
export const delStudentsAsync = createAsyncThunk(
    'samp/delStudent',
    async (email) => {
        console.log(email)
      const response = await delStudent(email);
      return response;
    }
  );

export const addStudentsAsync = createAsyncThunk(
    'samp/addStudents',
    async (student) => {
        // console.log(student)
      const response = await addStudents(student.email,student.sName);
      return response;
    }
  );
  export const addScoreAsync = createAsyncThunk(
    'samp/addScore',
    async (nScore) => {
        console.log(nScore)
      const response = await addScore(nScore.sEmail,nScore.score,nScore.course);
      return response;
    }
  );

export const sampSlice = createSlice({
  name: 'samp',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.students = action.payload.data;
      })
      .addCase(addStudentsAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
         state.students.push ( action.payload.data);
        //  console.log(state.students)
      })
      .addCase(delStudentsAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.students=state.students.filter (stu =>  stu.id !== action.payload.data.message);
        //  console.log(state.students)
        state.update =! state.update
      }).addCase(addScoreAsync.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.update =! state.update
        // state.students=state.students.filter (stu =>  stu.id !== action.payload.data.message);
        //  console.log(state.students)
      });
  },
});

export const {  } = sampSlice.actions;
export const selectStudents = (state) => state.samp.students;
export const selectUpdate = (state) => state.samp.update;
export default sampSlice.reducer;
