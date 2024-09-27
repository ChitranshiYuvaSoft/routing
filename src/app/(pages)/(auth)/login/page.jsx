"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const page = () => {
  const [passowrdShow, setPasswordShow] = useState(false);
  const router = useRouter()
  const token = localStorage.getItem("token")


  const [userData, setUserData] = useState({
    email : "",
    password : ""
  });

  const {email, password} = userData;

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
  }

  const handlePasswordShow = () => {
    if (!passowrdShow) {
      setPasswordShow(true);
    } else {
      setPasswordShow(false);
    }
  };

  // console.log(passowrdShow);

  const handleLogin = () => {
    if(email == "test@gmail.com" && password == "Test@123"){
    const random = Math.random().toString(36).substr(2);
    localStorage.setItem('token',random+random+random+random);
    router.push('/data-table'); 
    }
    else{
      alert("login unsuccessful")
    }
  };


  useEffect(()=>{
    if(token){
      router.push("/data-table")
    }
    else{
      router.push("/login")
    }
  },[token])

  return (
    <div className="w-full h-[86vh] flex items-center justify-center flex-col py-8 bg-slate-300">
      <div className="w-[25%] h-[60%] bg-slate-100 shadow-md shadow-slate-900 border flex items-center justify-between flex-col">
        <h2 className="text-center text-2xl font-semibold text-slate-800 pt-1">
          Login
        </h2>
        <div className="w-[100%] h-[80%] bg-slate-100 shadow-md shadow-slate-900 border flex items-center justify-around flex-col px-4">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="border border-slate-400 text-lg text-slate-600 py-2 px-2 w-full"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <div className="border border-slate-400 text-lg text-slate-600 w-full flex">
            <input
              type={!passowrdShow ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              className="h-[100%]  py-3 px-2 w-[80%]"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handlePasswordShow} className="flex items-center justify-center w-[20%]">
              {!passowrdShow ? (
                <IoEyeSharp className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </button>
          </div>
          <button className="w-full h-[20%] bg-slate-900 text-white" type="submit" onClick={()=>handleLogin()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
