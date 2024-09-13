import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blogs 
                    key={blog.id} 
                    blog={blog}>
                </Blogs>)
            }
        </div>
    );
};

export default Blogs;