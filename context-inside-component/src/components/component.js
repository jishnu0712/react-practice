import { useContext } from "react";
import MyContext from "../MyContext";

export default function Component() {
  const context = useContext(MyContext);
  return <h1>from component{context.msg}</h1>;
}
