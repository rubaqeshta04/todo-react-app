import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 (Not Found)</h1>
      <h3>The url you visited is not defined</h3>
      <Link to="/home">
        <button className="border-2 rounded-2xl p-2 text-blue-800 font-bold"> Return to Home</button>
      </Link>
    </>
  );
}
