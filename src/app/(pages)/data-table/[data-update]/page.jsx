"use client"
import BackBtn from "@/components/BackBtn";
import withAuth from "@/hoc/withAuth";
import { updateUser } from "@/Redux/Users/userSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const {editUser} = useSelector(state => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
  
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: editUser.user.id,
            name,
            email,
            city
        }))
        setName("");
        setEmail("");
        setCity("");
        router.push('/data-table')
    }


    useEffect(() => {
        setName(editUser.user.name)
        setEmail(editUser.user.email)
        setCity(editUser.user.city)
    },[editUser])



  return (
    <div className="w-full h-[86vh]  bg-slate-300 flex items-center justify-between flex-col py-8">
      <h1 className="text-center pt-3 font-bold text-2xl">Data Update</h1>
      <BackBtn Location={'/data-table'}/>
      <div className="w-[55%] h-[75%] mb-5 flex items-center justify-center border border-blue-300">
        <form
          action=""
          className="w-[100%] py-7 h-[76%] flex items-center justify-around flex-col"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            className="w-[60%] py-2 px-2"
            placeholder="Enter User Name"
            aria-label="Username"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-[60%] py-2 px-2"
            placeholder="Enter User Email"
            aria-label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-[60%] py-2 px-2"
            placeholder="Enter City Name"
            aria-label="City"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="w-[60%] text-sm bg-green-700 py-2 text-white">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default withAuth(page);
