import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    user: {},
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

    editUser: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        editUser : {user : action.payload, isEdit : true}
      }
    }

  },
});

export const { createUser, deleteUser, editUser} = userSlice.actions;

export default userSlice.reducer;
