import Link from "next/link";
import {lusitana} from "./fonts/font"
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full h-[86vh] flex items-center justify-around flex-col">
      <div className="w-full h-[100%] flex items-center justify-around flex-col">
        <h1  className={`${lusitana.className} text-center pt-3 font-bold text-2xl h-[6%]`}>
          Data Show Project
        </h1>
     
        <div className="w-[30%] h-[70%] flex items-center justify-center flex-col">
        <Image
        src="/projectimg.jpg"
        width={280}
        height={100}
        className="hidden md:block"
        alt="no image show"/>
         <Image
        src="/mobileImg.webp"
        width={560}
        height={620}
        className="block md:hidden"
        alt="no image show"/>


          <Link
            className="w-full h-full flex items-center justify-center"
            href={"/data-table"}
          > 
            <button className={`${lusitana.className} w-[40%] h-[60%] bg-slate-950 text-white shadow-2xl md:h-[25%]`}>
              Data Show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
