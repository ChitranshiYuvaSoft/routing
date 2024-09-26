"use client";
import { deleteUser } from "@/Redux/Users/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const { user, userData } = useSelector((state) => state.user);
  console.log(user);

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className="w-full h-[86vh] flex items-center justify-between flex-col">
      <h1 className="text-center pt-3 font-bold text-2xl h-[6%]">Data Show</h1>
      <table className="w-[70%] h-[76%] mb-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.city}</td>
              <td className="text-center">
                <button className="py-1 px-6 text-sm bg-yellow-600 text-slate-100 mx-1">
                  Edit
                </button>
                <button
                  className="py-1 px-6 text-sm bg-red-800 text-slate-100 mx-1"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
