# python redux exam program

This is a sample React project that demonstrates the use of the `useSelector` and `useDispatch` hooks from the `react-redux` library to interact with a Redux store. The project includes two main components, `Samp` and `AddStudent`, which display and manage a list of students and their scores, respectively.

## Getting Started

1. Clone the repository to your local machine
2. Install the dependencies
3. Start the development server (in back "flask run)
4. The application will be running on `http://localhost:3000/`

**Note**: Make sure you have Node.js installed on your machine before running the above commands.

`Samp` component uses `useSelector` hook to access the students from the store and display them on the screen. It also has a search function that filters the students by name. The `Del` button allows the user to delete a student from the store by dispatching an async thunk `delStudentsAsync`.

`AddStudent` component uses `useDispatch` hook to dispatch an async thunk `addStudentsAsync` when the user enters a name and email and clicks the Add button. it also has an option to add score for student by selecting student, course and score and clicking on add score button.

The store is implemented using the `createSlice` and `createAsyncThunk` from the `@reduxjs/toolkit` library, which makes it easy to handle async actions and update the state.

The API calls are handled in `sampAPI.js` file, which includes the functions for getting, adding and deleting students, and adding scores for students.