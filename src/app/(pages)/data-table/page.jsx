"use client";
import withAuth from "@/hoc/withAuth";
import { deleteUser, editUser, editUserData } from "@/Redux/Users/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {userData} = useSelector((state) => state.user);

  const handleDelete = (index) => {
    window.alert("User Data Delete")
    dispatch(deleteUser(index));
  };

  const handleEdit = (user) => {
    dispatch(editUserData(user))
    router.push(`/data-table/${user.id}`)
  }

  return (
    <div className="w-full h-[86vh] flex items-center justify-between flex-col py-8 bg-slate-300">
      <h1 className="text-center pt-3 font-bold text-2xl h-[6%]">Data Show</h1>
      <table className="w-[70%] h-[76%] mb-5">
        <thead className="w-[100%] h-[3rem] bg-slate-900">
          <tr className="w-[100%] text-white">
            <th className="w-[25%] text-center">Name</th>
            <th className="w-[25%] text-center">Email</th>
            <th className="w-[25%] text-center">City</th>
            <th className="w-[25%] text-center">Action</th>
          </tr>
        </thead>
        <tbody className="w-[100%]  bg-slate-200">
          {userData.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.city}</td>
              <td className="text-center">
                <button className="py-1 px-6 text-sm bg-yellow-600 text-slate-100 mx-1"
                onClick={() => handleEdit(item)}>
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

export default withAuth(page);
