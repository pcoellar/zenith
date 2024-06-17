import { fetchBlogs } from "../../../lib/data/data";
import Blog from "./blog";
import { BlogRequest } from "./blog.types";

export default async function Blogs(props: BlogRequest) {
    const blogs = await fetchBlogs(props.category, props.location);
    return (
        <>
        {
            blogs &&
            blogs.map((blog) => {
                return (
                    <Blog key={blog.id} blog={blog} />
                );
            })
        }
        </>
    );
}
