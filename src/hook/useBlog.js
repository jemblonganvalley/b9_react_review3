import { useContext } from "react";
import { BlogContext } from "../context/BlogContextProvider";

//custom hooks
export default function useBlogs(){
    return useContext(BlogContext)
}