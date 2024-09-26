"use client";
import { createUser } from "../../../Redux/Users/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BackBtn from "@/components/BackBtn";
import { useRouter } from "next/navigation";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  console.log(name, email, city);

  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        id: crypto.randomUUID(),
        name: name,
        email: email,
        city: city,
      })
    );
    setName("");
    setEmail("");
    setCity("");
    router.push('/data-table')
  };

  return (
    <div className="w-full h-[86vh]  bg-slate-300 flex items-center justify-between flex-col">
      <BackBtn Location={'/data-table'}/>
      <h1 className="text-center pt-3 font-bold text-2xl">Data Create</h1>
      <div className="w-[70%] h-[75%] mb-5 flex items-center justify-center">
        <form
          action=""
          className="w-[70%] py-7 h-[76%] flex items-center justify-around flex-col"
          onSubmit={handleCreateUser}
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
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
