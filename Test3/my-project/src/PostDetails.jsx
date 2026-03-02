import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postContext";
import NotFound from "./NotFound";

export default function PostDetails() {
  const { postId } = useParams();
  console.log(postId);
  const posts = useContext(postsContext);
  const post = posts.find((post) => {
    return post.id === parseInt(postId);
  });

  console.log(post);
  if (post) {
    return (
      <>
        <h1>Post Details Page</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  } else {
    console.log("post not defined", postId);
    return (
      <>
        <p>The post id : {postId} is not defined</p>
        
      </>
    );
  }
}
