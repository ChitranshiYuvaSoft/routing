import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-[86vh] flex items-center justify-around flex-col">
      <div className="w-full h-[40%] flex items-center justify-around flex-col">
        <h1 className="text-center pt-3 font-bold text-2xl h-[6%]">
          Data Show Project
        </h1>
        <div className="w-[30%] h-[50%] flex items-center justify-center">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={"/data-table"}
          >
            <button className="w-[40%] h-[40%] bg-neutral-900 text-white shadow-2xl">
              Data Show
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
