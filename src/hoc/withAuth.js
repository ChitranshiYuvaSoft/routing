import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        router.push("/login");
      } else {
        router.push("/data-table");
      }
    }, [token]);

    if (!token) {
      return (
        <div className="w-full h-[86vh] flex items-center justify-center flex-col py-8 bg-slate-300">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
