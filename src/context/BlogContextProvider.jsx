//https://jsonplaceholder.typicode.com/posts
import { createContext, useState, useEffect } from 'react'

export const BlogContext = createContext()

export default function BlogContextProvider({ children }) {
    const [post, setPost] = useState([])

    const getBlogPost = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            header: {
                "Content-Type": "application/json",
            },
        })

        const result = await data.json();

        return result
    }

    useEffect(() => {
        getBlogPost()
            .then((res) => {
                setPost(res)
                console.log(res)

            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <BlogContext.Provider value={{ post }}>
            {children}
        </BlogContext.Provider>
    )
}