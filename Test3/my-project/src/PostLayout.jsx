import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div className="w-full bg-green-700 font-bold p-2 mb-10">
        <h1>Post Layout</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="w-full bg-green-700 font-bold mt-10 p-2">
        <h1>Post Layout</h1>
      </div>
    </>
  );
}
