import Header from "./components/Header/Header.jsx";
import Post from "./components/Post/Post.jsx";
import Side from "./components/Side/Side.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className=" m-4 sm:m-10">
        {/* <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4"> */}
        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4">

          
          {/* المحتوى الرئيسي */}
          <div className="w-full md:w-[70%] text-center flex flex-col gap-4">
            <Post
              number="20"
              name="اكاديمية ترميز"
              description="اكاديمية مخصصة لتعليم البرمجة بقنياتها "
            />
            <Post name="js" description="ppppppppppppppppp" />
            <Post name="react" description="cccccccccccccccc" />
          </div>

          {/* السايد بار */}
          <div className="w-full md:w-[30%]">
            <Side />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
