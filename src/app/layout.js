"use client"

import Link from "next/link";
import "./globals.css";
import { ReduxProvider } from "./redux-provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-[4rem] bg-slate-800 flex items-center justify-between px-4">
          <h2 className="text-white text-2xl">Next CRUD</h2>
          <Link href={"/data-create"}>
            <h2 className="text-white text-lg">ADD USER  &nbsp; <span className="text-2xl border border-2-white rounded p-1 px-2">+</span></h2>
          </Link>
        </div>
        <ReduxProvider>
        {children}
        </ReduxProvider>
        <div className="w-full h-[ 1rem] bg-slate-900 flex items-center justify-center px-4">
          <h2 className="text-white">Next CRUD &copy; Project </h2>
        </div>
      </body>
    </html>
  );
}
