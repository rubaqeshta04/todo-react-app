import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import Post from "./Post";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postContext";
import NotFound from "./NotFound";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";

function App() {
  let postsData = [
    {
      id: 1,
      title: "Hello world",
      body: "React",
    },
    {
      id: 2,
      title: "second post",
      body: "React is awesome",
    },
    {
      id: 3,
      title: "third post",
      body: "React is great for building user interfaces",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
      <>
        {/* Navbar */}
        <div className="bg-gray-900 text-white p-4 shadow-md">
          <ul className="flex gap-4 justify-center">
            <li>
              <Link to="/home">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-200">
                  Home
                </button>
              </Link>
            </li>

            <li>
              <Link to="/hello">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition duration-200">
                  Hello
                </button>
              </Link>
            </li>

            <li>
              <Link to="/post">
                <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition duration-200">
                  Post
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Pages */}
        <div className="p-6 text-center">
          <Routes>
            <Route path="/hello" element={<Hello />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element = {<PostLayout/>}>
              <Route path=":postId" element={<PostDetails />} />
              <Route path="delete" element={<DeletePost />} />
              <Route path="new" element={<NewPost />} />
              <Route index element={<Post />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </postsContext.Provider>
  );
}

export default App;
