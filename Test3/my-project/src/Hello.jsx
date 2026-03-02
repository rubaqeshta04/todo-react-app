import { Link } from "react-router-dom"
export default function Hello(){
  return(
    <>
      <h1>hello world</h1>
      <h2>welcome</h2>
     <Link to="/">
       <div className="bg-orange-700 p-2 border-xl" >
        <h1>Go To Home Page</h1>
        
      </div>
     </Link>
     
    </>
  )
}