import { Link } from "react-router-dom";
import { postsContext } from "./contexts/postContext";
import { useContext } from "react";

export default function Post() {
  const posts = useContext(postsContext);
  let postLists = posts.map((post) => {
    return (
      <Link key={post.id} to={`/Post/${post.id}`}>
        <div className="bg-orange-700 p-2 border-xl mt-10">
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <div>{postLists}</div>;
}
