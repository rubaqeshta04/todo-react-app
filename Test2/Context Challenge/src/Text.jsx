import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Text() {
  const context = useContext(MyContext);
  return (
    <>
      <p style={{ fontSize :context.fontSize }}>Hello 👋</p>
    </>
  );
}
