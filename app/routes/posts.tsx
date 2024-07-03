import { Link, Outlet, useLocation, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Posts() {
  const location = useLocation();
  const params = useParams();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="bg-red-500 shadow-xl py-6">
        <div className=" flex container  text-white  items-center gap-4">
          {params?.id && (
            <Link to="/posts" className="text-white">
              <i className="ri-arrow-left-s-line text-2xl" />
            </Link>
          )}
          All Post
        </div>
      </div>

      <div className="flex flex-col overflow-auto h-full p-10 container">
        <Outlet />
      </div>
    </div>
  );
}
