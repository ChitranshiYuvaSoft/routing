import React from "react";

const page = () => {
  return (
    <div className="w-full h-[86vh]  bg-slate-300 flex items-center justify-between flex-col">
      <h1 className="text-center pt-3 font-bold text-2xl">Data Update</h1>
      <div  className="w-[70%] h-[75%] mb-5 flex items-center justify-center">
      <form action="" className="w-[70%] py-7 h-[76%] flex items-center justify-around flex-col">
        <input type="text" className="w-[60%] py-2 px-2" placeholder="Enter User Name" aria-label="Username" />
        <input type="email" className="w-[60%] py-2 px-2" placeholder="Enter User Email" aria-label="Email" />
        <input type="text" className="w-[60%] py-2 px-2" placeholder="Enter City Name" aria-label="City" />
        <button className="w-[60%] text-sm bg-green-700 py-2 text-white">Update Data</button>
      </form>
      </div>
    </div>
  );
};

export default page;
