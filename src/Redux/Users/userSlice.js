import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [
      { id: 1, name: "rahul", email: "rahul@gmail.com", city: "Indore" },
    ],
    editUser: { user: {}, isEdit: false },
  },
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    },

    deleteUser: (state, action) => {
      // return {
      //     ...state,
      //     userData: state.userData.filter(item => item.id !== action.payload)
      // }
      const index = action.payload;
      const data = [...state.userData];
      data.splice(index, 1);
      return {
        ...state,
        userData: data,
      };
    },

    editUserData: (state, action) => {
      return {
        ...state,
        editUser: { user: action.payload, isEdit: true },
      };
    },

    updateUser: (state, action) => {
      return {
        ...state,
        userData: state.userData.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        editUser: { user: {}, isEdit: false },
      };
    },
  },
});

export const { createUser, deleteUser, editUserData, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
